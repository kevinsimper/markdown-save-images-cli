# markdown-save-images-cli

A tool for finding images in a markdown file, saving the files somewhere.

With a file like this
```
example

![](./someimage.jpg)

![some caption](./someimage.jpg)

<img src="./someimage.jpg"/>
```

Try it out by running
```
$ node index.js
```

You will get this out:
```
[
  {
    type: 'image',
    title: null,
    url: './someimage.jpg',
    alt: null,
    position: Position { start: [Object], end: [Object], indent: [] }
  },
  {
    type: 'image',
    title: null,
    url: './someimage.jpg',
    alt: 'some caption',
    position: Position { start: [Object], end: [Object], indent: [] }
  }
]
```

