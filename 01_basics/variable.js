const accountId = 1;
let accountEmail = "rinal@gmail.com";
var accountPassword = "123"
accountCity = "Jaipur";

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

// accountId = 2;   not allowed bcoz const not redeclared or reassign.

//not to use var because of Block scope and Functional scope.

accountEmail = "rinalk19@gmail.com";
accountPassword = "12"
accountCity = "Surat";
accountName = "Rinal Kashyap Wadekar ";
dateBirth = "19-April"
console.log(dateBirth);


console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.log(accountName);
console.table([accountId,accountEmail,accountPassword,accountCity,accountName]);