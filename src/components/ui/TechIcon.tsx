import type { CSSProperties } from "react";
import { techIcons, type TechIconName } from "@/data/techIcons";
import { withBasePath } from "@/lib/basePath";

const wrapperStyle: CSSProperties = { display: "inline-block", lineHeight: 0 };

/** Renders a technology logo, filling its parent box. */
export function TechIcon({ name }: { name: TechIconName }) {
  const icon = techIcons[name];

  if ("src" in icon) {
    return (
      <span style={wrapperStyle}>
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, plain SVG asset */}
        <img src={withBasePath(icon.src)} alt="" />
      </span>
    );
  }

  const svg = icon.svg.replace(
    /<svg([^>]*)>/,
    '<svg$1 style="width: 100%; height: 100%; display: block;">',
  );
  return <span style={wrapperStyle} dangerouslySetInnerHTML={{ __html: svg }} />;
}
