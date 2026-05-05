
import { readdirSync } from "fs";
import { Buffer } from "buffer";



import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import FormData from "form-data";
import sharp from "sharp";

const inputDir = "./public/nike";
const outputDir = "./public/nike-output-img";
const tempDir = "./public/nike-temp";       // ✅ temp folder for JPG
const API_KEY = "ySXCzYthkh6jqgi4RL1w6iR9";

// Folders banao
[outputDir, tempDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const files = fs.readdirSync(inputDir).filter(f =>
  /\.(avif|webp|jpg|jpeg|png)$/i.test(f)
);

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const fileName = file.replace(/\.(avif|webp|jpg|jpeg|png)$/i, "");
  const tempJpgPath = path.join(tempDir, `${fileName}.jpg`);  // temp JPG
  const outputPath = path.join(outputDir, `${fileName}.png`); // final PNG

  try {
    // ✅ Step 1: AVIF → JPG (sharp se, temp folder mein)
    await sharp(inputPath)
      .jpeg({ quality: 95 })
      .toFile(tempJpgPath);

    console.log(`🔄 Converting: ${file}`);

    // ✅ Step 2: JPG → Remove.bg API
    const formData = new FormData();
    formData.append("image_file", fs.createReadStream(tempJpgPath));
    formData.append("size", "auto");

    const response = await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "X-Api-Key": API_KEY,
        ...formData.getHeaders(),
      },
      body: formData,
    });

    if (!response.ok) {
      const err = await response.json();
      console.error(`❌ Failed: ${file}`, err);
      continue;
    }

    // ✅ Step 3: Transparent PNG save karo
    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(outputPath, buffer);
    console.log(`✅ Done: ${file}`);

  } catch (err) {
    console.error(`❌ Error: ${file}`, err.message);
  }
}

// ✅ Temp folder delete karo (cleanup)
fs.rmSync(tempDir, { recursive: true, force: true });
console.log("🧹 Temp files cleaned!");
console.log("🎉 All done!");

const converted = readdirSync(outputDir)
  .filter(f => f.endsWith(".png"))
  .map(f => `/nike-output-img/${f}`);

console.log("Products array:\n", JSON.stringify(converted, null, 2));








