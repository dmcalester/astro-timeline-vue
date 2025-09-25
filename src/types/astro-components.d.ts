// Type declarations for Astro UX Design System Web Components

declare namespace JSX {
  interface IntrinsicElements {
    'rux-global-status-bar': any;
    'rux-button': any;
    'rux-clock': any;
    'rux-status': any;
    'rux-card': any;
    'rux-progress': any;
    'rux-slider': any;
    'rux-ruler': any;
    'rux-timeline': any;
    'rux-timeline-track': any;
    'rux-timeline-region': any;
    [key: `rux-${string}`]: any;
  }
}

// Vue 3 global component types
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    'rux-global-status-bar': any;
    'rux-button': any;
    'rux-clock': any;
    'rux-status': any;
    'rux-card': any;
    'rux-progress': any;
    'rux-slider': any;
    'rux-ruler': any;
    'rux-timeline': any;
    'rux-timeline-track': any;
    'rux-timeline-region': any;
  }
}