// Khai báo đối tượng gồm 4 thuộc tính: id, name, age, gender
const student = {
    "id": 1,
    "name": "Hoang Thi Lan",
    "age": 20,
    "gender": false
};

// Truy xuất vào các thuộc tính của đối tượng
console.log("ID: " + student.id + ", Name: " + student.name + ", Age: " + student.age+ ", Gender: "+ (student.gender==true?"Male":"Female"));

// Nâng cao về đối tượng
const person = {
    "id": 2,
    "name": {
        "first": "Hoang",
        "midle": "Ngoc",
        "last": "Nguyen"
    },
    "age": 21,
    "country": {
        "state": "Nam Tu Liem",
        "city": "Ha Noi",
        "street": "190 Nguyen Hoang Ton"
    }
};

let name = person.name.last + " " + person.name.midle + " " + person.name.first;
let country = person.country.street + " - " + person.country.state + " - " + person.country.city;
console.log("ID: " + person.id + ", Name: "+ name + ", Age: " + person.age + ", Country: " + country);