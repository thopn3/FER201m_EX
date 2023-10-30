const numbers = [9, 4, 1, 7];
// Rai cac phan tu cua mang numbers vao vi tri dau tien cua mang number1
const numbers1 = ["Hello", ...numbers, 15.5];

// console.log(numbers1);

// Du lieu lay tu DB ve
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

const newStudent = {"id":4, "name": "Tho", "age":19};

const newStudentList = [...students, newStudent];
console.log(newStudentList);

