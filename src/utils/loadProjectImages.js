export function loadProjectImages(folder) {
  const images = import.meta.glob(
    "../assets/projects/**/**/*.{png,jpg,jpeg,webp}",
    { eager: true }
  );

  return Object.entries(images)
    .filter(([path]) => path.includes(folder))
    .map(([, module]) => module.default);
}
