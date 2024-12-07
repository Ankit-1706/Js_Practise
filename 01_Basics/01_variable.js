const accountId = 144553
let accountEmail = "xyz@gmail.com"
var accountPassword = "123321"
accountCity = "Nagpur"
let accountState;

/*
prefer not to use var
because of issue in Block Scope & Function Scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])