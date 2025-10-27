


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

const calculateTotalCost =(price, quantity, taxRate) =>{
    if (typeof price != "number" || typeof quantity != "number" || typeof taxRate != "number"){
        return "Invalid input"
    } else{
        return (price * quantity) * (1 + taxRate)
    }
}
