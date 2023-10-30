import Student from "./Student";

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

function App() {
  return (
    <div>
      {/* Goi Student component va truyn 2 thuoc tinh: class, data  -> Properties (Props) -> {class, data} */}
      <Student class="FER201-Ex" data={students}/> 
    </div>
  );
}

export default App;
