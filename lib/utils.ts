// Utility functions per Jentu.it

/**
 * Costruisce l'URL per le immagini delle mappe da Railway
 */
export function getMapImageUrl(region: 'salento' | 'brindisi', timeframe: 'today' | 'tomorrow'): string {
  const baseUrl = 'https://jentu-production.up.railway.app/static/';
  
  if (region === 'salento') {
    return timeframe === 'today' 
      ? `${baseUrl}salento/salento_wave_map.png`
      : `${baseUrl}salento/salento_forecast_map.png`;
  } else {
    return timeframe === 'today'
      ? `${baseUrl}%20brindisi/itria_wave_map.png`
      : `${baseUrl}%20brindisi/itria_forecast_map.png`;
  }
}

/**
 * Formatta le date in italiano
 */
export function formatDate(date: Date, format: 'full' | 'short' = 'full'): string {
  if (format === 'short') {
    return new Intl.DateTimeFormat('it-IT', {
      day: 'numeric',
      month: 'short',
    }).format(date);
  }
  
  return new Intl.DateTimeFormat('it-IT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/**
 * Ottieni il giorno dell'anno (1-365/366)
 */
export function getDayOfYear(date: Date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

/**
 * Debounce function per ottimizzare chiamate
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Classnames helper (tipo cn() di shadcn)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Lazy load images
 */
export function lazyLoadImage(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Check se è mobile
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

/**
 * Smooth scroll to element
 */
export function scrollToElement(elementId: string, offset: number = 80): void {
  const element = document.getElementById(elementId);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

/**
 * Copy to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
}

/**
 * Format numero con separatori migliaia
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('it-IT').format(num);
}

/**
 * Share via Web Share API
 */
export async function shareContent(data: {
  title: string;
  text: string;
  url: string;
}): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share(data);
      return true;
    } catch (err) {
      console.error('Share failed:', err);
      return false;
    }
  }
  return false;
}

/**
 * Cache in localStorage con expiry
 */
export const cache = {
  set: (key: string, value: any, ttlMinutes: number = 60) => {
    if (typeof window === 'undefined') return;
    
    const item = {
      value,
      expiry: Date.now() + ttlMinutes * 60 * 1000,
    };
    localStorage.setItem(key, JSON.stringify(item));
  },
  
  get: <T>(key: string): T | null => {
    if (typeof window === 'undefined') return null;
    
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;
    
    try {
      const item = JSON.parse(itemStr);
      if (Date.now() > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }
      return item.value as T;
    } catch {
      return null;
    }
  },
  
  remove: (key: string) => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
  },
  
  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.clear();
  },
};

/**
 * Fetch con timeout
 */
export async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeout: number = 10000
): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}
