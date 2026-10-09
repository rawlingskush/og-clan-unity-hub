import { toCanvas } from 'html-to-image';

export async function downloadPlayerCard(card: HTMLElement, name: string) {
  await document.fonts.ready;
  const images = Array.from(card.querySelectorAll('img'));
  const originals = images.map(image => ({ src: image.src, style: image.getAttribute('style') }));
  try {
    await Promise.all(images.map(async image => {
      image.loading = 'eager';
      await image.decode();
      const response = await fetch(image.currentSrc || image.src);
      if (!response.ok) throw new Error('Profile image unavailable');
      const blob = await response.blob();
      image.src = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => typeof reader.result === 'string' ? resolve(reader.result) : reject(new Error('Image conversion failed'));
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      image.style.opacity = '1';
      image.style.transition = 'none';
      await image.decode();
    }));
    const canvas = await toCanvas(card, {
      pixelRatio: 2,
      cacheBust: false,
      filter: node => !(node instanceof HTMLElement && node.hasAttribute('data-export-exclude')),
      style: { transform: 'none', animation: 'none' },
    });
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Image export unavailable');
    const cardRect = card.getBoundingClientRect();
    const scaleX = canvas.width / cardRect.width;
    const scaleY = canvas.height / cardRect.height;
    images.forEach(image => {
      const rect = image.getBoundingClientRect();
      const x = (rect.left - cardRect.left) * scaleX;
      const y = (rect.top - cardRect.top) * scaleY;
      const width = rect.width * scaleX;
      const height = rect.height * scaleY;
      const cropSize = Math.min(image.naturalWidth, image.naturalHeight);
      context.save();
      context.beginPath();
      context.ellipse(x + width / 2, y + height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
      context.clip();
      context.drawImage(image, (image.naturalWidth - cropSize) / 2, (image.naturalHeight - cropSize) / 2, cropSize, cropSize, x, y, width, height);
      context.restore();
    });
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `OG-${name.replace(/ѲǤゝ/g, '').trim().replace(/[^\p{L}\p{N}-]+/gu, '-')}-player-card.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    link.remove();
  } finally {
    images.forEach((image, index) => {
      const original = originals[index];
      if (!original) return;
      image.src = original.src;
      if (original.style === null) image.removeAttribute('style');
      else image.setAttribute('style', original.style);
    });
  }
}
