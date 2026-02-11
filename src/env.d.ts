/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/svelte" />

declare namespace astroHTML.JSX {
  interface IntrinsicAttributes {
    'client:load'?: boolean;
    'client:idle'?: boolean;
    'client:visible'?: boolean;
    'client:only'?: string;
    'client:media'?: string;
  }
}