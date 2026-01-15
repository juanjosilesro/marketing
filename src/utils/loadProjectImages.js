export function loadProjectImages(projectFolder) {
  const images = import.meta.glob(
    "../assets/projects/**/**/*.{png,jpg,jpeg,webp}",
    { eager: true }
  );

  return Object.entries(images)
    .filter(([path]) => path.includes(`/projects/${projectFolder}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, module]) => module.default);
}
