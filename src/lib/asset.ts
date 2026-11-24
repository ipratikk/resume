// Prefixes public-folder paths with the Next.js basePath (e.g. "/resume" on GitHub Pages).
export const asset = (path: string) =>
    `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
