let myObject = {
    name: "Bryce",
    age: 26
}

console.log(myObject);

myObject.hobby = "Lots";
console.log(myObject);
console.log(typeof(myObject.age));
myObject.address = {
    streetNumber: "10",
    streetName: "Melbourne ave",
    city: "Umina beach",
    postCode: "2257",
    state: "NSW",
    country: "Australia"
}
for(key in myObject.address){ 
    console.log(key + ": " + myObject.address[key]);
}
console.log(myObject.address.city);

