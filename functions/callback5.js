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


    var flag = callback(file);
    console.log(flag);

}

//var fileName = "sample.pdf";
var fileName = "sample.jpg";
if(fileName.endsWith(".pdf")){
    uploadFile(fileName, pdfHandler);
}
else if(fileName.endsWith(".jpg")){
    uploadFile(fileName, imageHandler);
}
else if(fileName.endsWith(".mp4")){
    uploadFile(fileName, videoHandler);
}