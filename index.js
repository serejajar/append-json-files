const pdfUtil = require('pdf-to-text');
const pdfPath = "./pdf/raport_examene_2019.pdf";

//option to extract text from page 0 to 10
const options = {
  from: 113,
  to: 122
};

//Omit option to extract all text from the pdf file
pdfUtil.pdfToText(pdfPath, options, function(err, data) {
  if (err) throw(err);
  console.log(data); //print all text
});
