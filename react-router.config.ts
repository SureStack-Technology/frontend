import type { Config } from "@react-router/dev/config";

export default {
  // 1. Enable SSR (required for prerendering)
  ssr: true, 

  // 2. Define which routes to prerender into static HTML
  async prerender() {
    return ["/", "/about", "/contact"]; 
  },
} satisfies Config;
