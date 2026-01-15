export function loadProjectImages(path, count) {
  return Array.from({ length: count }, (_, i) =>
    new URL(`${path}/${i + 1}.png`, import.meta.url).href
  );
}
