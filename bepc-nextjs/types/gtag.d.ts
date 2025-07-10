declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      target: string,
      config?: Record<string, any>
    ) => void
  }
}

export {}