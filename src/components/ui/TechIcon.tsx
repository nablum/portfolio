"use client";

import { useId, type CSSProperties } from "react";
import { techIcons, type TechIconName } from "@/data/techIcons";
import { withBasePath } from "@/lib/basePath";

const wrapperStyle: CSSProperties = { display: "inline-block", lineHeight: 0 };

/**
 * Makes the ids inside an inline SVG unique to this instance. Otherwise every copy of the
 * same logo references the gradients of the first one, and turns invisible when that one is hidden.
 */
function scopeSvgIds(svg: string, scope: string): string {
  return svg
    .replace(/id="([^"]+)"/g, `id="$1-${scope}"`)
    .replace(/url\(#([^)]+)\)/g, `url(#$1-${scope})`)
    .replace(/href="#([^"]+)"/g, `href="#$1-${scope}"`);
}

/** Renders a technology logo, filling its parent box. */
export function TechIcon({ name }: { name: TechIconName }) {
  const icon = techIcons[name];
  const scope = useId().replace(/[^a-zA-Z0-9]/g, "");

  if ("src" in icon) {
    return (
      <span style={wrapperStyle}>
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, plain SVG asset */}
        <img src={withBasePath(icon.src)} alt="" />
      </span>
    );
  }

  const svg = scopeSvgIds(icon.svg, scope).replace(
    /<svg([^>]*)>/,
    '<svg$1 style="width: 100%; height: 100%; display: block;">',
  );
  return <span style={wrapperStyle} dangerouslySetInnerHTML={{ __html: svg }} />;
}
