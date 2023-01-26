function findMatching(drivers, driver){
    const name =  drivers.filter(drivers => drivers.toLowerCase() === driver.toLowerCase())
    return name;
  }


function fuzzyMatch(drivers, letters){
    const name = drivers.filter(driver => driver.toLowerCase().indexOf(letters.toLowerCase()) === 0)
    return name;
} 


  function matchName(drivers, name) {
    const x = drivers.filter( driver => driver.name === name)
    return x;
  }