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
 * Ex-0 : Review HTML Attribute
 **********************************************/

{
  /* <a href="https://google.com">This is a link</a>
<img src="" />
<input /> */
}

/**********************************************
 * Ex-1 : Render Array of React Element
 **********************************************/

/**********************************************
 * Ex-2 : Render Array of React Component (Function Component)
 **********************************************/

function TodoItem({ todo }) {
  return (
    <li className='todo__item'>
      <span>{todo}</span>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );
}

function App() {
  const todos = [
    { id: 1, task: 'HW' },
    { id: 2, task: 'Hangout' },
    { id: 3, task: 'Sleep' },
  ];
  return (
    <div className='container'>
      {/* AddTodo Comp.*/}
      <div className='todo__add'>
        <input type='text' />
        <button>Add</button>
      </div>

      {/* TodoList = List of TodoItem */}
      <div className='todo__container'>
        <ul className='todo__lists'>
          {todos.map((obj) => (
            <TodoItem todo={obj.task} />
          ))}
        </ul>
      </div>
    </div>
  );
}

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

// EX4
const persons = [
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
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

// props =  { source : "img.png", alt:"Arya"}
function Avatar(props) {
  // props ={alt:"Arya", src:"image"}
  return (
    <div className='avatar' id='pic'>
      <img className='avatar__image' alt={props.alt} src={props.source} />
    </div>
  );
}
// function AvatarGroup() {
//     return (
//         <div className='container'>
//             <Avatar alt='Arya' src='image' />
//             {/* const props ={alt:"Arya", src:"image"} */}
//             <Avatar
//                 source='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
//                 alt='Ned Stark'
//             />
//         </div>
//     );
// }

// LIST Render

const people = ['Arya', 'Ned', 'Rob', 'John', 'Sansa'];
/* 
  <Avatar alt="Arya"/>
  <Avatar alt="Ned"/>
  <Avatar alt="Rob"/>
  <Avatar alt="John"/>
*/

// MAP : name => <Avatar />
// 1st : "Arya" => <Avatar alt="Arya" />
// 2nd : "Ned" => <Avatar alt="Ned" />
// 3rd : "Rob" => <Avatar alt="Rob" />
// 4rd : "John" => <Avatar alt="John" />

const lists = people.map((name) => <Avatar alt={name} />);
// const lists = people.map((name) => <h1>{name}</h1>);
/*
lists = [
   <Avatar alt="Arya" />,
   <Avatar alt="Ned" />,
   <Avatar alt="Rob" />,
   <Avatar alt="John" />
]
*/

// function AvatarGroup() {
//     return (
//         <div className='container'>
//             {/* <Avatar alt={people[0]} />
//             <Avatar alt={people[1]} />
//             <Avatar alt={people[2]} />
//             <Avatar alt={people[3]} /> */}

//             {/* {lists} */}

//             {people.map((name) => (
//                 <Avatar alt={name} />
//             ))}
//         </div>
//     );
// }

function AvatarGroup() {
  return (
    <div className='container'>
      {/* person = {id:number, name:string, age:number , src:string} */}
      {peopleLists.map((person) => (
        <Avatar alt={person.name} source={person.src} />
      ))}
    </div>
  );
}
// Array => MAP each Object => Render Avatar => Pass Props alt, source

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
