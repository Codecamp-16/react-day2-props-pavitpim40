//

/**********************************************
 * 🚀 Welcome to the React Lab 🚀
 *
 * 🎯 Objective
 * - การ Render ข้อมูลจาก Array ใน JSX
 * - โดย Array เก็บข้อมูลเป็น Object
 *
 * 📝 Task:
 * - ให้สร้างตัวแปร Array เก็บข้อมูล Post ที่เป็น Object มี key คือ id, message, วันที่ Post, ชื่อคนโพสต์
 * -  นำ ArrayPost มา Render ใน list แล้วแสดงบนหน้า UI
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

// // Data
// const posts = [
// 	"Hi Thailand", "Hi USA"
// ];

// item = 	"Hi Thailand"
// root.render(
//   <>
//     {posts.map((item)=> <h1>{item}</h1>)}
//   </>
// );

// #############EX2
// // Data
const posts = [
  { id: 1, message: 'Hi Everyone', date: '2023-10-09', author: 'IO' },
  { id: 2, message: 'Hi Thailand', date: '2023-10-10', author: 'Callan' },
];

// item = { id: 1, message: 'Hi Everyone', date: '2023-10-09', author: 'IO' }
root.render(
  <>
    {posts.map((item) => (
      <div className='card'>
        <h1>{item.message}</h1>
        <h1>{item.date}</h1>
        <h1>{item.author}</h1>
      </div>
    ))}
  </>
);
