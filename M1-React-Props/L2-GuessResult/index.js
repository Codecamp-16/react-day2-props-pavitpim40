/**********************************************
 * 🚀 Welcome to the React Lab 🚀
 *
 * 🎯 Objective
 * - เข้าใจการใช้งาน props ใน Component
 * - รู้จัก Data Type ของ props
 *
 * 📝 Task:
 * - โค้ดในบรรทัดที่มี * ให้ผลลัพธ์เป็นอะไรและเพราะอะไร
 *
 * Suggestion 🧘🏻 :
 *
 *
 * 🚧 Challenge :
 *
 * 🌈 Enjoy the coding journey, and remember:
 *    "The more you code, the more you learn!" 🚀🌐
 **********************************************/

function Car(props) {
  console.log(props.brand); // * "Honda"
  console.log(props.price); // ** 1000000
  console.log(props.color); // *** undefined
  return <div>Car</div>;
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(

    <Car 
      brand='Honda' 
      price='1000000' 
    />);
