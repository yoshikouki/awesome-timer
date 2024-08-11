import type { MetadataRoute } from "next";
import { description } from "./metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "honon",
    short_name: "honon",
    description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#FFFFFF",
    icons: [
      {
        src: "/favicon",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/logo.webp",
        sizes: "600x600",
        type: "image/webp",
      },
      {
        src: "/icon-192x192.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/icon-512x512.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
