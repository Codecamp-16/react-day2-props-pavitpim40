/******************************************************************
 * Children Props
 * - ส่ง Props โดยการเขียนเป็น Children ของ Component
 * - Example 1 : <Parent>ChildrenText</Parent>
 * - Example 2 : <Parent><Children/></Parent>
 * - Example 3 : <Parent><Children/><Children/></Parent>
 * - Example 4 : <Parent><Children1/><Children2/></Parent>
 *****************************************************************/

/**********************************************
 *  create root from ReactDOM
 **********************************************/
const root = ReactDOM.createRoot(document.getElementById('root'));

/**********************************************
 * Ex-1 : Card Component
 **********************************************/

// function Card(props) {
//   return (
//     <div className='card'>
//       <div className='card-header'>{props.text}</div>
//       <div className='card-body'>{props.body}</div>
//       <div className='card-footer'>$ {props.price.toFixed(2)}</div>
//     </div>
//   );
// }

// /*
// Body-1 : <p> food description <p>
// Body-2 : <img src="link"/>
// ส่ง tag เข้าไปใน Function Component
// */
// root.render(
//   <>
//     <Card text='Pasta' price={5} body={<p>pasta desc..</p>} />
//     <Card text='Salad' price={3} body={<p>salad desc..</p>} />
//   </>
// );

// Children

function Card(props) {
  console.log(props.children);
  return (
    <div className='card'>
      <div className='card-header'>{props.text}</div>
      <div className='card-body'>{props.children}</div>
      <div className='card-footer'>$ {props.price.toFixed(2)}</div>
    </div>
  );
}

/*
Body-1 : <p> food description <p>
Body-2 : <img src="link"/>
ส่ง tag เข้าไปใน Function Component
*/
root.render(
  <>
    <Card text='Pasta' price={5}>
      <p>Pasta Description-1</p>
      <p>Pasta Description-2</p>
      <p>Pasta Description-3</p>
      <p>Pasta Description-4</p>
      <p>Pasta Description-5</p>
    </Card>
    <Card text='salad' price={3}>
      <div>
        <img src='https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      </div>
      <button>Order Now</button>
    </Card>
  </>
);
