/**********************************************
 * 🚀 Welcome to the React Lab 🚀
 *
 * 🎯 Objective
 * - เข้าใจการส่ง props ให้ Component
 * - เข้าใจการใช้งาน props ใน Component
 *
 *
 * 📝 Task:
 *
 *  -ให้สร้าง Component ชื่อ ProductItem
 *  -ใน Component แสดงข้อมูลดังนี้
 *      -tag <h1> แสดงชื่อ product
 *      -tag <h2> แสดง price ของ product
 *      -tag <p> แสดง description ของ product
 *      - ชื่อ price และ description ของ product ถูกส่งมาทาง props
 *  - ให้ render ProductItem ในหน้า web โดยให้ส่งค่า props ทั้งสามเป็นค่าอะไรก็ได้
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

// สร้าง Component #1
// function ProductItem(props) {
// 	console.log(props)
//   return (
//     <>
//       <h3>Product Name : {props.name}</h3>
//       <h4>Product Price : {props.price}</h4>
//       <p>Description : {props.detail}</p>
//     </>
//   );
// }

// #2
// function ProductItem(props) {
// 	// Object Destructure
// 	const {name,price,detail} = props
//   return (
//     <>
//       <h3>Product Name : {name}</h3>
//       <h4>Product Price : {price}</h4>
//       <p>Description : {detail}</p>
//     </>
//   );
// }

// #3
// Object Destructure at Function Parameter
function ProductItem({ name, price, detail }) {
  return (
    <>
      <h3>Product Name : {name}</h3>
      <h4>Product Price : {price}</h4>
      <p>Description : {detail}</p>
    </>
  );
}

// Render Component
root.render(<ProductItem name='Ipad' price={30_000} detail='New version' />);
