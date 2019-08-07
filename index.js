
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
    if ((name.slice[0,1,2].toLowerCase)===(name.slice[0,1,2].toUpperCase)){
      return true
    }else{
      return false
    }
})
return fuxx
}
