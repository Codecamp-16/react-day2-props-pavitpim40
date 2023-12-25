// tag <h1> แสดงชื่อ product
// tag <h2> แสดง price ของ product
// tag <p> แสดง description ของ product

// คนเขียน Component

// const productDetail = {name:"Macbook", price : 10000, des:"The real power"}
// <ProductItem  data={productDetail}/>
// <ProductItem  data={{name:"Macbook", price : 10000, des:"The real power"}}/>

function ProductItem(props) {
  // const props = { data : {name:"Macbook", price:10000, des:"The real power"}  }
  return (
    <>
      <h1>{props.data.name}</h1>
      <p>$ {props.data.price}</p>
      <h1>{props.data.des}</h1>
    </>
  );
}

// คนเรียกใช้ Component
function App() {
  return (
    <div className='container'>
      <ProductItem data={{ name: 'Mac-Mini', price: 7000, des: 'The real power in your pocket' }} />
    </div>
  );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
