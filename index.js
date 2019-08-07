
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
  fiz=drivers.filter(driver.name.slice[0,1]);
  if fiz=drivers.name[]{return true
  }else{
    return false;
  }
}
