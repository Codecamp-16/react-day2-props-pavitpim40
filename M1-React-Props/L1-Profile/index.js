/**********************************************
 * 🚀 Welcome to the React Lab 🚀
 *
 * 🎯 Objective
 * - การส่ง props ให้ Component
 *
 * 📝 Task:
 * - ให้สร้าง Component ชื่อ Profile
 * - ใน Component ประกอบด้วย
 *  - tag <h1> แสดงชื่อ John Doe
 *  - tag <h2> แสดงอายุ 27 ปี
 * - ให้ render Profile ในหน้า web
 * - ลองส่ง props ชื่อและอายุเข้าไปใน Component Profile เป็นค่าอื่น ๆ
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
// function Profile(attributeObject) {
//   console.log('AttributeObject', attributeObject);
//   return (
//     <>
//       <h1>Name : {attributeObject.name}</h1>
//       <h2>Age : {attributeObject.age}</h2>
//     </>
//   );
// }

// function Profile(props) {
//   console.log('AttributeObject', props);
//   return (
//     <>
//       <h1>Name : {props.name}</h1>
//       <h2>Age : {props.age}</h2>
//     </>
//   );
// }

// Render Component
// root.render(<Profile name='John' age={20} />);
