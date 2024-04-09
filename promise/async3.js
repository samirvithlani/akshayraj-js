const generateQuestions =  () => {

    const questions = [
        {
            question: 'What is your name?',
            answer: 'My name is John Doe'
        },
        {
            question: 'What is your age?',
            answer: 'I am 25 years old'
        }
    ]


    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(questions)
        },3000)
    })

}

const generateExam = (questions) => {


        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({
                    examName:"Final Exam",
                    questions:questions
                })
            },2000)
        })

}

const generateResult = (exam) => {
    
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({
                    exam:exam,
                    result:"Pass"
                })
            },3000)
        })
    
}

const takeExam = async () => {


        console.log("starts")
        console.log("questions are being fetched...")
        const questions = await generateQuestions();
        console.log(questions)
        console.log("exam is being created...")
        const exam = await generateExam(questions);
        console.log(exam)
        console.log("exam is being taken...")
        const result = await generateResult(exam);
        console.log(result)
        console.log("ends")



}
takeExam() // starts