const pdfUtil = require('pdf-to-text');
const pdfPath = "../pdf/raport_examene_2019.pdf";

const options = {
  from: 113,
  to: 122
};

pdfUtil.pdfToText(pdfPath, options, function(err, data) {
  if (err) throw(err);
  console.log(data);
});
