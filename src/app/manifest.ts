import type { MetadataRoute } from "next";
import { SITE, sitePath } from "@/lib/site";
export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest {
  return { name:SITE.name, short_name:SITE.name, description:SITE.description, start_url:sitePath("/"), scope:sitePath("/"), display:"standalone", background_color:"#f8fafc", theme_color:"#2563eb", icons:[{src:sitePath("/icon-512.png"),sizes:"512x512",type:"image/png"}] };
}
