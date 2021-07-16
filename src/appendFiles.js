const { onlyUnique } = require('./utils');

function appendFiles(preparedData, files) {
  return preparedData.map((dataItem) => {
    let found = false;

    files.forEach((file, i) => {
      const { address } = file;
      const regexp = new RegExp(file.search, 'gi');
      const isSchool = dataItem.name.search(regexp) !== -1;

      if (
        dataItem.city === address.city
        && dataItem.district === address.district
        && isSchool
      ) {
        const langs = [
          ...(file.langs || []),
          dataItem.lang
        ].filter(onlyUnique);

        const profiles = [
          ...(file.profiles || []),
          dataItem.profile
        ].filter(onlyUnique);

        const newData = {
          ...file,
          langs,
          profiles,
        };

        files[i] = newData;
        found = true;
      }
    });

    if (found) {
      return;
    }

    return dataItem;
  }).filter(item => !!item);
}

module.exports = appendFiles;
