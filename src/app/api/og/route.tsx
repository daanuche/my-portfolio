import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

const interDisplayMedium = await readFile(
  join(process.cwd(), "src/app/fonts/InterDisplay-Medium.ttf"),
);

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Inter Display",
        fontWeight: 500,
        fontSize: 56,
        color: "black",
        letterSpacing: 0,
      }}
    >
      Daniel Uche, Engineer
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter Display",
          data: interDisplayMedium,
          weight: 500,
          style: "normal",
        },
      ],
    },
  );
}
