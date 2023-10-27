// Khai báo mảng trong JS
const numbers = [10, 20, "Hello", true, 3.5]; // Giống ArrayList
// Thêm 1 phần tử vào vị trí cuối cùng
numbers[5] = 15; //
numbers.push("World"); // Thêm 1 phần tử vào vị trí cuối cùng của mảng

// Duyệt để in các phần tử trong mảng
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     console.log(element);
// }

// for(let element of numbers){
//     console.log(element);
// }

// numbers.forEach(element => {
//     console.log(element);
// });

// numbers.map(element => {
//     console.log(element);
// })

// Yêu cầu: Tạo một mảng gồm 3 đối tượng student (trong 2_object.js)
// 1. Sử dụng vòng lặp in ra danh sách các student
// 2. In ra sinh viên có tên (firstName) bắt đầu bởi từ khóa cần tìm
// 3. Tìm và cập nhật thông tin của sinh viên căn cứ vào id

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

function printStudent(data=[]){
    console.log("ID\tFullname\t\t\tAge\tCountry");
    data.forEach(d => {
        let fullname = d.name.first + " " + d.name.midle + " " + d.name.last;
        let country = d.country.street + " - " + d.country.state + " - " + d.country.city;
        console.log(d.id+"\t"+fullname+"\t\t\t"+d.age+"\t"+country);
    });
}

function searchStudentByFirstName(data=[], searchKey=""){
    let result = data.filter(s=>s.name.first.startsWith(searchKey));
    return result;
}

function updateStudentById(data=[], searchId=0, {fname, lname, mname, age}){
    data.map(s=>{
        if(s.id == searchId){
            // Update
            s.name.first = fname;
            s.name.last = lname;
            s.name.midle = mname;
            s.age = age
        }
    })
    return data;
}

const newStudent = {"fname": "Dung","lname": "Pham", "mname": "Tien", "age": 23};
const resultUpdate = updateStudentById(students, 2, newStudent);
printStudent(resultUpdate);

// let searchResult = searchStudentByFirstName(students, "Q");
// printStudent(searchResult);

// printStudent(students)






