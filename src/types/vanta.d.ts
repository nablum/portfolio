// Minimal typings for the Vanta.js effects used by the site (the package ships none).

declare module "vanta/dist/vanta.waves.min" {
  export interface VantaEffect {
    destroy(): void;
  }

  export interface VantaOptions {
    el: HTMLElement;
    THREE: unknown;
    [option: string]: unknown;
  }

  const WAVES: (options: VantaOptions) => VantaEffect;
  export default WAVES;
}

declare module "vanta/dist/vanta.birds.min" {
  import type { VantaEffect, VantaOptions } from "vanta/dist/vanta.waves.min";

  const BIRDS: (options: VantaOptions) => VantaEffect;
  export default BIRDS;
}
