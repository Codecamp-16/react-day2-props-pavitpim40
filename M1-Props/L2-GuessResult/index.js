function Car(props) {
  console.log(props.brand); // *
  console.log(props.price); // **
  console.log(props.color); // ***
  return <div>Car</div>;
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<Car brand='Honda' price='1000000' />);
