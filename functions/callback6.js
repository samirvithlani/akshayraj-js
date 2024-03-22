const pdfHandler = (file) => {
  return file + " is a pdf file";
};

const imageHandler = (file) => {
  return file + " is an image file";
};
const videoHandler = (file) => {
  return file + " is a video file";
};

//sample.pdf pdfHandler
const uploadFile = (file, callback) => {
  return callback(file);
};

//var fileName = "sample.pdf";
var fileName = "sample.jpg";
if (fileName.endsWith(".pdf")) {
  var x = uploadFile(fileName, pdfHandler);
  console.log(x);
} else if (fileName.endsWith(".jpg")) {
  x = uploadFile(fileName, imageHandler);
  console.log(x);
} else if (fileName.endsWith(".mp4")) {
  x = uploadFile(fileName, videoHandler);
  console.log(x);
}
