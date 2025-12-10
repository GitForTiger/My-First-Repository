const accountId = 12452
let accountEmail = "apple@gmail.com"
var accountPasswd = "12345qwert"
accountCity="Lucknow"
// accountId=2 // This is not allowed since accountId is a const.
console.log(accountId);
console.table([accountId, accountEmail, accountPasswd, accountCity]);
accountEmail="banana@gmail.com"
accountPasswd="67890yuiop"
accountCity="Rourkela"
console.table([accountId, accountEmail, accountPasswd, accountCity]);
/*
Prefer not to use var due to issues in block scope and functional scope.
*/