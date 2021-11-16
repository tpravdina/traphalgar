export const getAlt = (path: string): string => path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
