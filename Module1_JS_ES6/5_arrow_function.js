// Old syntax:
function add(x, y){
    return x+y;
}
// console.log(add(5,10));

// New syntax - Su dung Lamda expression
const sum = (x, y) => x+y;
// console.log(sum(15, 20));

const sum1 = (x,y) => {return x+y};
// console.log(sum1("Hello", " World"));

const students = [
    {
        "id": 1,
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
    },
    {
        "id": 2,
        "name": {
            "first": "Quyen",
            "midle": "Hoang",
            "last": "Tran"
        },
        "age": 19,
        "country": {
            "state": "Cau Giay",
            "city": "Ha Noi",
            "street": "100 Nguyen Khang"
        }
    },
    {
        "id": 3,
        "name": {
            "first": "Quynh",
            "midle": "Hai",
            "last": "Pham"
        },
        "age": 20,
        "country": {
            "state": "Bac Tu Liem",
            "city": "Ha Noi",
            "street": "100 Tran Binh"
        }
    }
];

function printStudents(data=[]){
    data.forEach(function(s){
        console.log(s.id + ", "+ s.name.first+ ", "+ s.age + ", "+s.country.city);
    });
}

// printStudents(students);

// Thay the bang arrow function 
const showStudents = data => data.forEach(s=> console.log(s.id + ", "+ s.name.first+ ", "+ s.age + ", "+s.country.city));

showStudents(students);
