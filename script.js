function validateEmail(str) {
    let regExp=/^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    return regExp.test(str);
}
let str1="a@gmail.com";
let str2="ab@yahoo.com";
let str3="abc@hotmail.com";
let str4="@gmail.com";
let str5="ab@gmail.";
let str6="@#abc@gmail.com";
console.log(validateEmail(str1));
console.log(validateEmail(str2));
console.log(validateEmail(str3));
console.log(validateEmail(str4));
console.log(validateEmail(str5));
console.log(validateEmail(str6));
