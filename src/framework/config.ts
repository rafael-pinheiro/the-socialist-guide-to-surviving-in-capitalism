export interface Config {
  analyticsId: string;
}

declare global {
  interface Window {
    config: Config;
  }
}