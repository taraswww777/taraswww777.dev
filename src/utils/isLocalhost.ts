export const isLocalhost = (): boolean => {
  if (typeof window !== "undefined") {
    return window?.location?.host === 'localhost:3000'
  }

  return false;
}
