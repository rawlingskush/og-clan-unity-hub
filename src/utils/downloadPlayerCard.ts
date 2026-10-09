import { toPng } from 'html-to-image';

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
    const dataUrl = await toPng(card, {
      pixelRatio: 2,
      cacheBust: false,
      filter: node => !(node instanceof HTMLElement && node.hasAttribute('data-export-exclude')),
      style: { transform: 'none', animation: 'none' },
    });
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
