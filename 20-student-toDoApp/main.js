/**
 * Date: 14-03-2022
 * Time: 12:45 AM
 * Author: Md. Mithon Islam
 * Dec: Student Todo apps for javascript functional
 */


// Select DOM
let studentName = document.getElementById('name')
let studentId = document.getElementById('idNumber')
let studentRoll = document.getElementById('rollNumber')
let studentDept = document.getElementById('dept')
let studentGpa = document.getElementById('gpa')
let addStudentBtn = document.getElementById('addBtn')


// Student Add Action Button
addStudentBtn.addEventListener('click', function(){
    if(studentName.value == ''){
        alert('Please Enter Name')
    }else if(studentId.value == ''){
        alert('Please Enter Id')
    }else if(studentRoll.value == ''){
        alert('Please Enter Roll')
    }else if(studentDept.value == ''){
        alert('Please Enter Dept')
    }else if(studentRoll.value == ''){
        alert('Please Enter GPA')
    }else {
        let tbody = document.getElementById('tbody')
        let tr = document.createElement('tr')

        // Student Name
        let tdName = document.createElement('td')
        tdName.innerHTML = studentName.value
        tr.appendChild(tdName)

        // Student Id
        let tdId = document.createElement('td')
        tdId.innerHTML = studentId.value
        tr.appendChild(tdId)

        // Student Roll
        let tdRoll = document.createElement('td')
        tdRoll.innerHTML = studentRoll.value
        tr.appendChild(tdRoll)

        // Student Dept
        let tdDept = document.createElement('td')
        tdDept.innerHTML = studentDept.value
        tr.appendChild(tdDept)

        // Student GPA
        let tdGpa = document.createElement('td')
        tdGpa.innerHTML = studentGpa.value
        tr.appendChild(tdGpa)

        tbody.appendChild(tr) // Tbody

        alert('Successfully') // Success alert message

        // Clear Field
        studentName.value = ''
        studentId.value = ''
        studentRoll.value = ''
        studentDept.value = ''
        studentGpa.value = ''
    }
})
