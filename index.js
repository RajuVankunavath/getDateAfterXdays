const  addDays = require("date-fns/addDays");



const numberOfDays = (day)=>{
    const result = addDays(new Date(2020, 7, 22), day)
    return`${result.getDate()}-${result.getMonth()+1}-${result.getFullYear()}`
}

module.exports =numberOfDays;

