let userObj = {
    "id": 10000,
    "name":"John Smith",
    "age":23,
    "true":"John",
    // {"id":120}: {id:120,name:"john"}
}

let userMap = new Map();

console.log(userMap);

// use map set key & values
userMap.set("id",90898978);  // key is string value is number
userMap.set(3434,"John Smith"); // key is number value is string
userMap.set(true,"Married"); // key is boolean value is string
userMap.set(null,"empty value");
userMap.set({id:1000},{id:1000,name:'Mike smith',emial:'mike@gmail.com'});

console.log(userMap);
// fetch data from map
console.log(userMap.get("id"));
console.log(userMap.get(true));
console.log(userMap.get(3434));


console.log("Keys :>" , userMap.keys());
console.log("Values :>" , userMap.values());

//iterate over map 
for(let key of userMap.keys()) {
    console.log("Key : ", key, " values : ", userMap.get(key));
}