const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
const terser = require("terser");

const src = "src";

const build = (outputPath, filePath) => {
  const file = fs.readFileSync(filePath);

  const doc = terser.minify(
    `module.exports=${JSON.stringify(yaml.safeLoad(file))}`
  ).code;
  fs.writeFileSync(outputPath, doc);
};

const foo = (dir, root = "") => {
  dir.forEach((fileName) => {
    const filePath = path.resolve(src, root, fileName);
    const outputPath = path.resolve(root, fileName).replace(/.yml$/, ".js");

    if (fs.statSync(filePath).isDirectory()) {
      foo(fs.readdirSync(filePath), fileName);
    } else {
      build(outputPath, filePath);
    }
  });
};

foo(fs.readdirSync(path.resolve(src)));
