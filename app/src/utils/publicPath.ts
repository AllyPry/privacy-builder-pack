/**
 * Converts a path to a public asset to work in both local development and GitHub Pages
 */
export function publicPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Since Next.js's basePath/assetPrefix only applies to production builds,
  // we need to handle local development (where we want unmodified paths)
  if (process.env.NODE_ENV === 'development') {
    return `/${cleanPath}`;
  }
  
  // For production builds (GitHub Pages), we leverage Next.js basePath/assetPrefix config
  // which will automatically handle the path prefixes for us
  return `/${cleanPath}`;
} 