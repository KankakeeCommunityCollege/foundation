#!/usr/bin/env node

// ================================================================== //
// Increment the `preview_priority: <N>` front-matter setting of all  //
//   _alumnis/*.md collection files. Useful when adding a new alumni  //
//   to the collection.                                               //
//                                                                    //
// Run this file using: `npm run increment-alumni`                    //
//                                                                    //
// ================================================================== //

import { readdir, readFile, writeFile } from 'node:fs';

const path = './_alumnis/'; // Path to alumni collection files

// Colored console output without external packages
const cyanControlChar = '\x1b[36m';
const colorResetControlChar = '\x1b[0m';
const info = text => `${cyanControlChar}${text}${colorResetControlChar}`;

function readFolder(path) {
  return new Promise((res, rej) => {
    readdir(path, (err, files) => {
      if (err) rej(err);
      res(files);
    })
  });
}

function loopFiles(files) {
  // Ensure they're all markdown files and exclude the _defaults.md file
  const mdFiles = files.filter(
    file => file.search(/\.(?:md|markdown)$/) !== -1 && file.search(/^_defaults.md$/) === -1
  );

  console.log(info(`Incrementing files:`));

  mdFiles.forEach(file => {
    const filename = `${path}${file}`;

    readFile(filename, 'utf8', (err, data) => {
      const content = data.replace(
        /^(preview_priority: )(\d+)$/m,
        (_m, c1, c2) => `${c1}${++c2}`
      );

      // Overwrite existing file with changed content
      writeFile(filename, content, 'utf8', (err) => {
        if (err) console.error(err);
        console.log(info(`  Modified file: `) + `${path}${file}`);
      })
    });
  });
}

readFolder(path)
  .then(files => loopFiles(files))
  .catch(err => console.error(err))
