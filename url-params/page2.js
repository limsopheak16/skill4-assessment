const paramString = window.location.search;
const urlParam = new URLSearchParams (paramString);
const fullName = urlParam.get('fullname');
console.log(fullName);

