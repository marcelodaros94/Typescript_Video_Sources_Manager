export function addQueryParams(url: string, params: Record<string, string>): string {
    const urlObj = new URL(url);
    
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      urlObj.searchParams.set(key, params[key]);
    }
  }
  
    return urlObj.toString();
  }