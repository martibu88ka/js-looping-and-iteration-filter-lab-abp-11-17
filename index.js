
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
  (drivers.name) = (drivers.filter(driver.name.slice[0,1]))
