/**********************************************
 * 🚀 Welcome to the React Lab 🚀
 *
 * 🎯 Objective
 * - การ Render ข้อมูลจาก Array ใน JSX
 *
 * 📝 Task:
 * - สร้างหน้า UI สำหรับแสดงผล Feed ของเพื่อน
 * - รูป Feed อยู่ใน images/
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

// Reuse Component => Function Component
// More Reusable => PassProps
function Card(props) {
  return (
    <div className='card'>
      {props.header}
      <div className='card__footer'>
        <p>author : {props.author}</p>
        <p>date : {props.date}</p>
      </div>
    </div>
  );
}

const cardList = [
  <Card header='A' author='a' date='2023-10-11' />,
  <Card header='B' author='b' date='2023-12-11' />,
  <Card header='C' author='c' date='2023-09-11' />,
];

const feeds = [
  { id: 1, title: 'A', author: 'a', date: '2023-10-11' },
  { id: 2, title: 'B', author: 'b', date: '2023-12-11' },
  { id: 3, title: 'C', author: 'c', date: '2023-09-11' },
];

root.render(
  <>
    {feeds.map(function (card,index) {
      return <Card 
					key={index}
					header={card.title} 
					author={card.author}
					date={card.date}
					/>;
    })}
  </>
);

// <Component a="1" b="2" c="3" d=[]/>
// Component({ a:"1", b:"2", c:"3", d=[] })

// function Component(ObjectOfAttribute) {
//   console.log(ObjectOfAttribute);
//   return <h1>Hi</h1>;
// }

// root.render(<Component a='1' b='2' c='3' />);
