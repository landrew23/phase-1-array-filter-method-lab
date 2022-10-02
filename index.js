const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(driver, name){
return driver.filter(word => word.toLowerCase() === name.toLowerCase())
}
function fuzzyMatch(driver, name){
return driver.filter((word) => word.startsWith(name))
}

function matchName(driver, names){
 return   driver.filter(driver => driver.name === names )
}