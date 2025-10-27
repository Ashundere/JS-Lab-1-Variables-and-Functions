


const formatFullName =(firstName="", lastName="") =>{
    const capFirstName= firstName.charAt(0).toUpperCase() + firstName.slice(1)
    const capLastName= lastName.charAt(0).toUpperCase() + lastName.slice(1)
    if (firstName ==='' || lastName ===''){
        return "Invalid name input"
    }
    else{
        return capLastName + ", " + capFirstName
    }
}

// const calculateTotalCost =(price, quantity, taxRate) =>{
//     if (typeof price != "number" || typeof quantity != "number" || typeof taxRate != "number"){
//         return "Invalid input"
//     } else{
//         return (price * quantity) * (1 + taxRate)
//     }
// }
//Kept this function here as proof that I did Task 2!

const checkEligibility = (age, isEmployed) =>{
    if(age > 18 && isEmployed== true){
        return "You are Eligible!"
    } else if(age > 18 && isEmployed == false){
        return "You are Conditionally Eligible!"
    } else{
        return "You are Not Eligible."
    }
}

const calculateTotalCost =(price, quantity, taxRate, discount) =>{
    if (typeof price != "number" || typeof quantity != "number" || typeof taxRate != "number"){
        return "Invalid input"
    } else if(discount == undefined){
        return (price * quantity) * (1 + taxRate)
    } else{
        return ((price * quantity) - discount) * (1+taxRate)
    }
}
