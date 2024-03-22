function science() {
  console.log("Science is cool!");
}
function commerce() {
  console.log("Commerce is cool!");
}
function arts() {
  console.log("Arts is cool!");
}

function addmission(cb) {
  console.log("Addmission is called...");
  cb(); //science();
}

var per = 87;
if (per >= 80) {
  addmission(science);
} else if (per >= 60) {
  addmission(commerce);
} else {
  addmission(arts);
}
