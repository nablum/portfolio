const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes a public asset path with the deployment base path (e.g. GitHub Pages sub-folder). */
export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
