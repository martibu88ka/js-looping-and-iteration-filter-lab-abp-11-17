
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

function fuzzyMatch(drivers, name){
  let fuxx= drivers.filter(function(name){
    if ((name.slice[0,1].toLowerCase)===(name.slice[0,1].toUpperCase)){
      return true
  
    }
})
return fuxx
}
