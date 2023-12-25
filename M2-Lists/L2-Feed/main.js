const posts = [
    { id: 1, text: 'Happy NewYear', author: 'Tar', date: '2023-01-23' },
    { id: 2, text: 'Happy BirthDay', author: 'Alac', date: '2023-02-23' },
    { id: 3, text: 'Happy Valentine', author: 'Mix', date: '2023-03-23' },
];

// #1 รับ Props
// function Card(props) {
//     return (
//         <div className='card'>
//             <div>{props.text}</div>
//             <div className='card__footer'>
//                 <p>Author :{props.author} </p>
//                 <p>{props.date}</p>
//             </div>
//         </div>
//     );
// }

// #2 รับ Props แล้วมา Destructure
// function Card(props) {
//     const { text, author, date } = props;

//     // const text = props.text
//     // const author = props.author
//     // const date = props.date
//     return (
//         <div className='card'>
//             <div>{text}</div>
//             <div className='card__footer'>
//                 <p>Author :{author} </p>
//                 <p>{date}</p>
//             </div>
//         </div>
//     );
// }

// #3
function Card({ text, author, date }) {
    return (
        <div className='card'>
            <div>{text}</div>
            <div className='card__footer'>
                <p>Author :{author} </p>
                <p>{date}</p>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className='container'>
            {posts.map((obj) => (
                <Card key={obj.id} text={obj.text} author={obj.author} date={obj.date} />
            ))}
        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
