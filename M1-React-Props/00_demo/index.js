/******************************************************************
 * What's Props (React Props)
 * Definition :
 * - JSX Attribute as a Javascript Object
 * - Component Attribute as a Javascript Object
 *
 * --------------------------------------------------------------
 * Syntax : Component with Props
 * --------------------------------------------------------------
 * <MyComponent name="John Doe" age={30} isAdmin onClick={()=>{}}/>
 *
 * --------------------------------------------------------------
 * Mental Model of Props (Attribute -> JS Object)
 * --------------------------------------------------------------
 * props = {
 *  name: "John Doe",
 *  age: 30,
 *  isAdmin :true,
 *  onClick : () => {}
 * }
 *
 * --------------------------------------------------------------
 * Mental Model when Component Render with Props
 * --------------------------------------------------------------
 *
 * #1 <MyComponent name="John Doe" age={30} isAdmin onClick={()=>{}}/>
 *
 * ==============================================================
 *
 * #2 MyComponent(props) or
 *
 * ==============================================================
 *
 * #3 MyComponent({
 *  name: "John Doe",
 *  age: 30,
 *  isAdmin :true,
 *  onClick : () => {}
 * })
 * ==============================================================
 * --------------------------------------------------------------
 * Benefits
 * --------------------------------------------------------------
 * | 1 | More Reusable Component ⭐️
 * --------------------------------------------------------------
 *****************************************************************/

/**********************************************
 *  create root from ReactDOM
 **********************************************/
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<h1>Hello</h1>); // React Element ,Native Element (h1,div,span)

// function MyComponent() {
//   return <h1>Hello from Component</h1>;
// }

// React Component (FN ที่ return JSX)
// root.render(
//   <>
//     <MyComponent />
//     <MyComponent />
//     <MyComponent />
//   </>
// );
/**********************************************
 * Ex-0 : Review HTML Attribute
 **********************************************/

{
  /* <a href="https://google.com">This is a link</a>
<img src="" />
<input /> */
}

/**********************************************
 * Ex-0 : Review JS Function
 **********************************************/
// การประกาศฟังก์ชัน
// function squareOfTwo() {
//   return 2 ** 2;
// }
// var result = squareOfTwo();
// result = 4

// function squareOfTen() {
//   return 10 ** 2;
// }
// var result = squareOfTen();
// console.log(result);
// result = 100

// function square(num) {
//   return num ** 2;
// }

// var result = square(10);
// console.log(result);

/**********************************************
 * Ex-0 : Review React Function Component
 **********************************************/

// function MyComponent() {
//   return <h1>Hello HardCode</h1>;
// }

// root.render(
//   <>
//     <MyComponent />
//     <MyComponent />
//     <MyComponent />
//     <MyComponent />
//   </>
// );
/**********************************************
 * Ex-1 : UserInfo (Pass a single String)
 **********************************************/

// function UserProfile(input) {
//   return (
//     <h1>
//       {input.firstName} {input.lastName}
//     </h1>
//   );
// }

// let result = UserProfile({ firstName: 'CC', lastName: '16' });
// let result = UserProfile({ firstName: 'John', lastName: 'Doe' });
// let result = UserProfile({ firstName: 'Jame', lastName: 'Gun' });
// let result = <UserProfile firstName='John!' lastName='Doe!' />;
// root.render(
//   <>
//     <UserProfile firstName='John' lastName='Doe' />
//     <UserProfile firstName='Jane' lastName='Doe' />
//     <UserProfile firstName='Jammy' lastName='Doe' />
//     <UserProfile firstName='Jame' />
//   </>
// );

/**********************************************
 * Ex-2 : Pass String and Number
 **********************************************/

// function MyComponent(input) {
//   console.log(input, typeof input);
//   return <p>Age : {input.age}</p>;
// }

// root.render(
//   <>
//     <MyComponent age={30} />
//     <MyComponent age={40} />
//     <MyComponent age={50} />
//   </>
// );

/**********************************************
 * Ex-3 : Custom ClassName (Pass String)
 **********************************************/
// function TypoGraphy(props) {
//   console.log(props);
//   // {color : "red"}
//   // {color:"blue"}
//   let finalClassName = `text-${props.color}`;
//   return <h1 className={finalClassName}>{props.text}</h1>;
// }

// root.render(<h1 className='text-red'>Hello</h1>);
// root.render(<h1 className='text-blue'>Hello</h1>);
// root.render(
//   <>
//     <TypoGraphy color='red' text='Hi' />
//     <TypoGraphy color='blue' text='สวัสดีประเทศไทย' />
//   </>
// );

/**********************************************
 * Ex-3 : Pass Boolean
 **********************************************/

// function Button(props) {
//   console.log(props);
//   return <button disabled={!props.active}> Click ME </button>;
// }

// root.render(
//   <>
//     <Button active={true} />
//     <Button active={false} />
//   </>
// );

// root.render(
//   <>
//     <Button active /> {/* <Button active={true} />  */}
//     <Button />
//   </>
// );

/**********************************************
 * Ex-4 : Pass Array
 **********************************************/

/**********************************************
 * Ex-5 : Pass Object
 **********************************************/

// function Book(props) {
//   return (
//     <main>
//       <h1>title : {props.title}</h1>
//       <h3>author : {props.author}</h3>
//       <h3>price : {props.price} THB</h3>
//       <h3>edition : {props.edition}</h3>
//     </main>
//   );
// }

const book = {
  name: 'Harry Potter',
  author: 'JK Rowling',
  price: 300,
  edition: 1000,
};
// props = {title: 'Harry Potter', author:'JK Rowling',price:300,edition:1000 }

// root.render(
// <Book
//   title={book.name}
//   author={book.author}
//   price={book.price}
//   edition={book.edition}
//   />
// );

function Book(props) {
  console.log(props);
  return (
    <main>
      <h1>title : {props.data.name}</h1>
      <h3>author : {props.data.author}</h3>
      <h3>price : {props.data.price} THB</h3>
      <h3>edition : {props.data.edition}</h3>
    </main>
  );
}

root.render(<Book data={book} />);
/**********************************************
 * Ex-6 : Pass Object
 **********************************************/

/******************************************************************
 * 🚀 CodeCamp Thailand - Relearn Solution Co. 🌐
 *
 * 👤 Author: Pavit Pimchanagul
 * 📅 Date: 2023-12 (CC16)
 *
 * 📜 Description:
 *    [Brief description of the code or file]
 *
 * 🛠️ Modification History:
 *    [Date] - 🧑‍💻 [ModifiedBy]
 *       [Description of changes]
 *
 * 🌟 Elevate your coding journey with Relearn Solution!
 *    Happy coding, fellow CodeCampers! 🚀✨
 ******************************************************************/
