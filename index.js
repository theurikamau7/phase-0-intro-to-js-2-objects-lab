// Write your solution in this file!


const employee = {
    name: "IanKamau",
    streetAddress: "Nairobi"
}


function updateEmployeeWithKeyAndValue(obj, key, value){
  return {
    ...obj,
    [key] : value
  }

}
console.log(updateEmployeeWithKeyAndValue(employee, "workId", 177))
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "workId", 200)
console.log(employee);

function deleteFromEmployeeByKey(obj, key){
    const newObj = {
        ...obj
    }
    delete newObj[key]

    return newObj
    
}

console.log(deleteFromEmployeeByKey(employee, "workId"))
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}

destructivelyDeleteFromEmployeeByKey(employee, "workId")
console.log(employee);