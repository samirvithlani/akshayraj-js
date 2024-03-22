const marks = 45

const commerce = (user) => {

    console.log(`User ${user} is in commerce`)
}
const science = (user) => {

    console.log(`User ${user} is in science`)
}
const arts = (user) => {
    
        console.log(`User ${user} is in arts`)

}


const admission = (name,cb) => {

    cb(name)
}


if (marks >= 90) {

    admission("amit",commerce);
}
else if (marks >= 80 && marks <= 89) {
    
        admission("raj",science);
}
else {
    admission("neha",arts);
}