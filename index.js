const unified = require("unified");
const markdown = require("remark-parse");
const { readFileSync } = require("fs");

function readMarkdown(text) {
  const tree = unified()
    .use(markdown)
    .parse(text);

  let images = [];
  let nodes = [...tree.children];

  while (nodes.length) {
    const current = nodes.shift();
    if (current.children) {
      nodes = nodes.concat(current.children);
    }
    if (current.type === "image") {
      images.push(current);
    }
  }
  return images;
}

if (require.main === module) {
  const file = readFileSync("./example.md");
  console.log(readMarkdown(file));
}
