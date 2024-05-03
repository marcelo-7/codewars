function toCamelCase(str){

    if(str.length == 0) {
        //console.log("")
        return ""
    }
    
    //replace all _ with -
    let newString = str.replaceAll("_","-") 
    
    //split into array by "-"
    let newArray = newString.split("-")
    let correctArray = []
    correctArray[0] = newArray[0]
    //capitalize each except first
    for (let i = 1; i < newArray.length; i++) {
        //console.log(newArray[i])
        let capitalizedString = newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1)
        correctArray.push(capitalizedString)
    }
    //put together
    return correctArray.join("")
}

toCamelCase("the_stealth_warrior")