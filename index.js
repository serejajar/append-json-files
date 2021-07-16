const fs = require('fs');
const path = require('path');

const prepareData = require('./src/prepareData');
const readFiles = require('./src/readFiles');
const appendFiles = require('./src/appendFiles');

const data = require('./bac/2019.js')
  .trim()
  .split('\n');

const dirPath = path.join(__dirname, 'moldova-schools');

const preparedData = prepareData(data);
const files = readFiles(dirPath);
const notSavedItems = appendFiles(preparedData, files);

console.log(notSavedItems);

files.forEach((file) => {
  const filePath = path.join(dirPath, `${file.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(file, null, 2));
});
