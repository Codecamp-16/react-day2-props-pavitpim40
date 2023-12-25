/**********************************************
 * 🚀 Welcome to the React Lab 🚀
 *
 * 🎯 Objective
 * - การ Render ข้อมูลจาก Array ใน JSX
 *
 * 📝 Task:
 * - ให้สร้างตัวแปร Array เก็บชื่อเพื่อน
 * - นำ Array ชื่อเพื่อนมา Render ใน list แล้วแสดงบนหน้า UI
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

const friends = ['John', 'Taylor', 'Jim'];

// root.render(friend);
/*
<div id="root">
	"John" "Taylor"
</div>
*/

// input :  ['John', 'Taylor']
// output : [<h3>John</h3>,  <h3>Taylor</h3>]
// map : name => <h3>name<h3>

const result = friends.map(function (person) {
  return <h3>{person}</h3>;
});

// root.render(
//   <>
//     <h3>John</h3>
//     <h3>Taylor</h3>
//     {[<h3>John</h3>, <h3>Taylor</h3>]}
//     {result}
//   </>
// );

root.render(
  <>
    {friends.map(function (person) {
      return <h3>{person}</h3>;
    })}
  </>
);

// <h3>John</h3>
//  <h3>Taylor</h3>;
// <h3>Jim</h3>;
