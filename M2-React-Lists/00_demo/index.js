/******************************************************************
 * Render Lists
 *
 *
 * --------------------------------------------------------------
 * Concept : Render Array of React Element / React Component
 * --------------------------------------------------------------
 * - data : [1,2,3,4,5]
 * - render : [<li>1</li>,<li>2</li>,<li>3</li>,<li>4</li>,<li>5</li>]
 * --------------------------------------------------------------
 * - data : ['HW','Hangout','Sleep']
 * - render : [<TodoItem todo="HW" />, <TodoItem todo="Hangout" />, <TodoItem todo="Sleep" />]
 *****************************************************************/

/**********************************************
 *  create root from ReactDOM
 **********************************************/
const root = ReactDOM.createRoot(document.getElementById('root'));

/**********************************************
 * Ex-1 : Render Array of React Element
 **********************************************/

// root.render(
//   <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//   </ul>
// );

const lists = [1, 2, 3];
// const listsComponent = [<li>1</li>, <li>2</li>, <li>3</li>];
const listsComponent = lists.map((item, index) => <li>{item}.</li>);

// root.render(<ul>{listsComponent}</ul>);

// Try
const users = ['John', 'Katy', 'Taylor', 'Ned'];
// userComponent ของ H1 และเอาไปแสดงผล

/*
Data => Element(UI)
"John" => <h1>John</h1>
"Katy" => <h1>Katy</h1>
"Taylor" => <h1>Taylor</h1>
*/
// const usersComponent = users.map(function (person, index) {
//   console.log(person);
//   return (
//     <h1 key={index}>
//       {index + 1}. {person}
//     </h1>
//   );
// });

// const usersComponent = users.map((p, i) => (
//   <h1 key={i}>
//     {i + 1}. {p}
//   </h1>
// ));

// root.render(usersComponent);

// root.render(
//   <>
//     {users.map((p, i) => (
//       <h1 key={i}>
//         {i + 1}. {p}
//       </h1>
//     ))}
//   </>
// );
/**********************************************
 * Ex-2 : Render Array of React Component (Function Component)
 **********************************************/

const todos = ['Hw', 'Football', 'PlayGame'];
// const todoLists = [<li>HW</li>, <li>Football</li>, <li>PlayGame</li>];

// const todoLists = todos.map((todo) => <li>{todo}</li>);

function TodoItem(props) {
  return <li>{props.text}</li>;
}

// root.render(
//   <>
//     <TodoItem text='HW' />
//     <TodoItem text='Football' />
//     <TodoItem text='Play Game' />
//   </>
// );

const todoLists = todos.map((todo) => <TodoItem text={todo} />);
/*
[
  <TodoItem text="Hw"/>,
  <TodoItem text="Football" />,
  <TodoItem text="PlayGame"/>,
]
*/

root.render(todoLists);

/**********************************************
 * Ex-3 : More Example : Quote App
 **********************************************/
const quotes = [
  {
    quote: 'The only sin is ignorance',
    source: 'Christopher Marlowe',
  },
  {
    quote:
      'A man is his own easiest dupe, for what he wishes to be true he generally believes to be true',
    source: 'Demosthenes',
  },
  {
    quote: 'A lie can travel halfway around the world while the truth is putting on its shoes',
    source: 'Mark Twain',
  },
  {
    quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people',
    source: 'Eleanor Roosevelt',
  },
  {
    quote: 'If you have a garden and a library, you have everything you need',
    source: 'Marcus Tullius Cicero',
  },
  {
    quote: 'Truth comes out in wine',
    source: 'Pliny the Elder',
  },
  {
    quote: 'Everything in the universe is within you. Ask all from yourself',
    source: 'Rumi',
  },
  {
    quote: 'When I get a little money I buy books; and if any is left I buy food and clothes',
    source: 'Desiderius Erasmus',
  },
];

/**********************************************
 * Ex-4 : More Example : Avatar Group
 **********************************************/
const peopleLists = [
  {
    id: 1,
    name: 'Arya',
    age: 18,
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 2,
    name: 'Ned',
    age: 45,
    src: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 3,
    name: 'Rob',
    age: 25,
    src: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 4,
    name: 'John',
    age: 25,
    src: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
  },
];

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
