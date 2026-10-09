import { toPng } from 'html-to-image';

export async function downloadPlayerCard(card: HTMLElement, name: string) {
  await document.fonts.ready;
  await Promise.all(Array.from(card.querySelectorAll('img')).map(async image => {
    image.loading = 'eager';
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
}