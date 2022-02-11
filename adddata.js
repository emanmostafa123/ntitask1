
const fs = require('fs')
const { array } = require('yargs')
const addStudentData = (studentId,studentName,studentDegrees,comment,totalDegrees)=>{
    const studentData = loadStudentData()
    

    const idDeplicated = studentData.filter((id) =>{
        return id.studentId === studentId
    })

    let sum =0
    studentDegrees.forEach((degree)=>{
        sum+=degree
    })

    totalDegrees = sum

    if (idDeplicated.length == 0){
        studentData.push({
            studentId,
            studentName,
            studentDegrees,
            comment,
            totalDegrees 
        })

        

        saveStudentData(studentData)
        console.log('SAVEDDDDD')
        
    }
    else{
        console.log('ERRORRRRR')
    }
    
}

const loadStudentData = ()=>{
    
    try{
        const studentData = fs.readFileSync('studentdatafile.json').toString()
    

        return JSON.parse(studentData)
    }
    catch(e){
        
        return []
    }
}


const saveStudentData = (studentData) =>{
    const savestudentdata = JSON.stringify(studentData)
    fs.writeFileSync('studentdatafile.json', savestudentdata)
}



const removeStudentData = (studentId) =>{
    const studentData = loadStudentData()
    const storedData = studentData.filter((id)=>{
        return id.studentId !== studentId
    })
    if (storedData.length !== studentData.length){
        saveStudentData(storedData)
        console.log('Removed Data')
    }
    else{
        console.log('Id not stored')
    }
}

const readStudentData = (studentId) =>{
    const studentData = loadStudentData()
    const readData = studentData.find((id)=>{
        return id.studentId === studentId
    })
    if(readData){
        console.log(readData)
    }
    else{
        console.log('NOT Found')
    }
}


const listStudentData = () =>{
    const studentData = loadStudentData()
    studentData.forEach( (y)=> {
        console.log(y.studentId,y.studentName,y.studentDegrees,y.comment)
    });
}





module.exports = { 
    a:addStudentData,
    removeStudentData,
    readStudentData,
    listStudentData,
    
}
