


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

