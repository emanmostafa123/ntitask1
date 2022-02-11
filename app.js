const { describe, number, string } = require('yargs')

const adddata = require('./adddata')

const yargs = require('yargs')

const fs = require('fs')


yargs.command({
    command : 'add',
    describe : 'add student data',
    builder : {
        studentId :{
            describe : 'it is a unique id',
            demandOption : true,
            type : 'number'
        },
        studentName :{
            describe : 'it is student name',
            demandOption : true,
            type :'string'
        },
        studentDegrees :{
            describe : 'student degrees',
            demandOption : true,
            type : 'array'
        },
        comment :{
            describe : 'comment of student degrees',
            type : 'string'
        },
        totalDegrees :{
            type : 'number'
        }
        
    },
    handler : (el) => {
         
        
        adddata.a(el.studentId,el.studentName,el.studentDegrees,el.comment,el.totalDegrees)
        
    }
})



yargs.command({
    command : 'delete',
    describe : 'remove student data',
    builder : {
        studentId :{
            describe : 'it is a unique id',
            demandOption : true,
            type : 'number'
        }
    },
    handler : (el) => {
        adddata.removeStudentData(el.studentId,el.studentName,el.studentDegrees,el.comment)
    }
})


yargs.command({
    command : 'read',
    describe : 'read student data',
    builder : {
        studentId :{
            describe : 'it is a unique id',
            demandOption : true,
            type : 'number'
        }
    },
    handler : (el) => {
        adddata.readStudentData(el.studentId,el.studentName,el.studentDegrees,el.comment)
    }
})

yargs.command({
    command : 'list',
    describe : 'list student data',
    handler : () => {
        adddata.listStudentData()
    }
})


yargs.parse()