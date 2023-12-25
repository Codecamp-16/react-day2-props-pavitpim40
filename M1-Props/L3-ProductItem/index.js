// tag <h1> แสดงชื่อ product
// tag <h2> แสดง price ของ product
// tag <p> แสดง description ของ product

function ProductItem(props) {
    return (
        <>
            <h1>{props.name}</h1>
            <p>$ {props.price}</p>
            <h1>{props.description}</h1>
        </>
    );
}

function App() {
    return (
        <div className='container'>
            <ProductItem name='MacBook' price={10000} description='The real power' />
            <ProductItem name='Huawei' price={10001} description='The super real power' />
        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
