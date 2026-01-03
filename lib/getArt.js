import fs from "fs";
import path from "path";

export function getArtFiles() {
  const artDir = path.join(process.cwd(), "public", "ART");
  return fs
    .readdirSync(artDir)
    .filter((file) => /\.(png|jpg|jpeg|webp)$/i.test(file));
}
