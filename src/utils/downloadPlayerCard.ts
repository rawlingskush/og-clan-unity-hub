import { toPng } from 'html-to-image';

export async function downloadPlayerCard(card: HTMLElement, name: string) {
  await document.fonts.ready;
  const images = Array.from(card.querySelectorAll('img'));
  await Promise.all(images.map(async image => {
    image.loading = 'eager';
    await image.decode();
  }));
  const clone = card.cloneNode(true) as HTMLElement;
  clone.style.width = `${card.offsetWidth}px`;
  clone.style.height = 'auto';
  clone.style.position = 'fixed';
  clone.style.left = '-10000px';
  clone.style.transform = 'none';
  clone.querySelectorAll('[data-export-exclude]').forEach(element => element.remove());
  const clonedImages = Array.from(clone.querySelectorAll('img'));
  await Promise.all(images.map(async (image, index) => {
    const target = clonedImages[index];
    if (!target) return;
    const response = await fetch(image.currentSrc || image.src);
    if (!response.ok) throw new Error('Profile image unavailable');
    const blob = await response.blob();
    target.src = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => typeof reader.result === 'string' ? resolve(reader.result) : reject(new Error('Image conversion failed'));
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    target.loading = 'eager';
    target.style.opacity = '1';
    target.style.transition = 'none';
  }));
  document.body.appendChild(clone);
  try {
  await Promise.all(clonedImages.map(image => image.decode()));
  const dataUrl = await toPng(clone, {
    pixelRatio: 2,
    cacheBust: false,
    filter: node => !(node instanceof HTMLElement && node.hasAttribute('data-export-exclude')),
    style: { position: 'relative', left: '0', top: '0', transform: 'none', animation: 'none', opacity: '1' },
  });
  const link = document.createElement('a');
  link.download = `OG-${name.replace(/ѲǤゝ/g, '').trim().replace(/[^\p{L}\p{N}-]+/gu, '-')}-player-card.png`;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  link.remove();
  } finally {
    clone.remove();
  }
}