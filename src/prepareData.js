const replaceRoDiacritics = require('./replaceRoDiacritics');

function prepareData(data) {
  let preparedData = [];

  for (var i = 0; i < data.length; i += 3) {
    const district = data[i].trim();
    const city = data[i + 2].trim();
    const nameStr = data[i + 1]
      .trim()
      .replace(/(\s){2,}/g, '___');

    const [num, name, lang, profile] = nameStr.split('___');

    preparedData.push({
      num,
      district: replaceRoDiacritics(district, true),
      city: replaceRoDiacritics(city, true).replace('-', ''),
      name: replaceRoDiacritics(name),
      lang: replaceRoDiacritics(lang),
      profile: replaceRoDiacritics(profile)
    });
  }

  return preparedData;
}

module.exports = prepareData;
