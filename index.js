
function findMatching (drivers,name){
  let MatchingDrivers=drivers.filter(function(driver){
    if (name.toLowerCase()===driver.toLowerCase()){
      return true
    }
    else {
      return false
    }
  })
  return MatchingDrivers
}

function fuzzyMatch(drivers, ""){
  if drivers.name[0,1]===drivers.name [0,1]{
    return true
  }
}
