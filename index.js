function lowerCaseDrivers (drivers) {
  return drivers.map(function(drivers) {return drivers.toLowerCase()});
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    names = driver.split(" ");
    return {firstName: names[0], lastName: names[1]}
  })
}