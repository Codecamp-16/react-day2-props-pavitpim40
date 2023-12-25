/**********************************************
 * 🚀 Welcome to the React Lab 🚀
 *
 * 🎯 Objective
 * - เข้าใจการส่ง props ให้ Component 1 ค่าเป็น Object
 * - เข้าใจการใช้งาน props ใน Component
 *
 *
 * 📝 Task:
 *
 *  -จาก Lab ที่แล้วให้ส่ง props เข้าไปได้ค่าเดียว ชื่อ product
 *  - โดยที่ props ตัวนี้จะมี data type เป็น Object
 *  -ให้ render ProductItem ในหน้า web
 *
 * Suggestion 🧘🏻 :
 *
 *
 * 🚧 Challenge :
 *
 * 🌈 Enjoy the coding journey, and remember:
 *    "The more you code, the more you learn!" 🚀🌐
 **********************************************/

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// สร้าง Component

function ProductItem(props) {
  console.log(props);
  return (
    <>
      <h3>Product Name : {props.product.name}</h3>
      <h4>Product Price : {props.product.price}</h4>
      <h4>Description: {props.product.description}</h4>
    </>
  );
}
// วิธี Collect Data => Object (เก็บได้หลายค่า)
const item = {
  name: 'iMac',
  price: 50_000,
  description: 'new Version',
};

// Render
root.render(<ProductItem product={item} />);
