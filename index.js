// Code your solution in this file!
const pickuplocation  = propmt("enter pick up lcation:")

//function for calculate distanceFromHqInBlocks
function distanceFromHqInBlocks (pickuplocation) {
    const scuberHq = 42
    if (pickuplocation >= 42){
        return pickuplocation -scuberHq
    }
    else {
        return scuberHq - pickuplocation
    }
}

//calculating distancefromhqinfeet
function distanceFromHqInFeet(pickuplocation) {
    distanceFromHqInBlocks(pickuplocation)
    let blockperfeet = 264

    return distanceFromHqInFeet = distanceFromHqInBlocks(pickuplocation) * blockperfeet

}

//calculating distancetravelinfeet
function distanceTravelledInFeet(pickuplocation, destination) {
    let distanceTravelled = 0
    let blockperfeet = 264
    if (pickuplocation<=destination) {
         distanceTravelled =(destination - pickuplocation)* blockperfeet

    }
    else {
        distanceTravelled  = (pickuplocation - destination) * blockperfeet

    }
    return distanceTravelled 

}

//calculatefareprices
function calculatesFarePrice (pickuplocation,destination) {
    const distanceTravelled = distanceTravelledInFeet (pickuplocation ,destination)
    if (distanceTravelled<=400){
        return 0
    }
    else if (distanceTravelled>400 && distanceTravelled<=2000){
        return (distanceTravelled - 400) * 0.02
        
    }
    else if (distanceTravelled>2000 && distanceTravelled<=2500){
      return 25
    }
    else {
        return "cannot travel that far"
    }
    }

    
    


