/**********************************************
 * 🚀 Welcome to the React Practice Lab! 🚀
 * Relearn Solution - All Rights Reserved
 *
 * 🎯 Objective :
 * - การใช้ Children Props
 *
 * 📝 Problem Statement:
 * - สร้าง Parent Card UI สำหรับแสดงผล Card ทั้งสองแบบ (รูปอยู่ใน images/)
 *
 *
 *  Hint :
 *  - มองหาส่วนประกอบของ Card ที่เหมือนกัน ทำเป็น Parent Component
 *  - ส่วนที่แตกต่างกันทำเป็น Props หรือ Children Component
 *
 *
 * 🌈 Enjoy the coding journey, and remember:
 *    "The more you code, the more you learn!" 🚀🌐
 **********************************************/

const root = ReactDOM.createRoot(document.getElementById('root'));

function Parent(props) {
  return (
    <div className='card'>
      {props.title && <h2>{props.title}</h2>}
      {props.subtitle && <h4>{props.subtitle}</h4>}
      <div className='card-body'>{props.children}</div>
      {props.footer && <div className='card-footer'>{props.footer}</div>}
    </div>
  );
}

root.render(
  <Parent title='Headline label' subtitle='text label'>
    <form className='form'>
      <input className='form__input' />
      <button className='form__button'>Button</button>
    </form>
  </Parent>
);
