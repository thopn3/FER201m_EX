// Kỹ thuật phân rã đối tượng và mảng
const student = {
    "firstName" : "Duc",
    "lastName": "Hoang Minh",
    "age": 20
};

let {firstName:fName, lastName:lName, age} = student;

// Phân rã mảng
const users = [
    {"id": 1, "name": "Binh", "age": 20},
    {"id": 2, "name": "Hong", "age": 21, "address": "190 Nguyen Tuan, Thanh Xuan"}
];

const [user1, user2] = users;
console.log(user2);
