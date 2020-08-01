import Projects from "../src/data/projects";
import fetch from "node-fetch";
import * as fs from "fs";
import * as path from "path";
import slugify from "slugify";

async function fetchScreenshot(url: string) {
  return (
    await fetch(
      `https://screenshotter-63pyhi7unq-uc.a.run.app/?website=${url}&width=800&height=400`
    )
  ).buffer();
}

async function run() {
  console.log("Fetching images");

  for (let project of Projects) {
    const response = await fetchScreenshot(project.link);

    const name = slugify(project.name.replace(/\.com/, "").replace(/\./g, "-"));

    fs.writeFileSync(
      path.resolve(__dirname, "../public/images/projects", `${name}.png`),
      response
    );

    console.log(`Fetched ${name}!`);
  }
  console.log("Done!");
}

run();
