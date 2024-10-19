/*
4th - Let, const & var in Javascript 
*/

// Learn through Investigation

const accountId = 144553
let accountEmail = "swap@gmail.com"
var accountPassword = "12345"
accountCity = "Pune" // Its possible to declare variable but, Its not proper way of declaration
let accountState;

// accountId = 2 // not allowed by node JS

// Try to change other assigned values
accountEmail = "swapin.com"
accountPassword = "323212"
accountCity = "Nashik"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
