// Khai báo mảng trong JS
const numbers = [10, 20, "Hello", true, 3.5]; // Giống ArrayList
// Thêm 1 phần tử vào vị trí cuối cùng
numbers[5] = 15; //
numbers.push("World"); // Thêm 1 phần tử vào vị trí cuối cùng của mảng

// Duyệt để in các phần tử trong mảng
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
}

// Yêu cầu: Tạo một mảng gồm 3 đối tượng student (trong 2_object.js)
// 1. Sử dụng vòng lặp in ra danh sách các student
// 2. In ra sinh viên có tên (firstName) bắt đầu bởi từ khóa cần tìm
// 3. Tìm và cập nhật thông tin của sinh viên căn cứ vào id