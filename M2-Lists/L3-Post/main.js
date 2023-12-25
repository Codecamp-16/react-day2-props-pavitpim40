// ให้สร้างตัวแปร Array เก็บข้อมูล Post ที่เป็น Object มี key คือ id, message, วันที่ Post, ชื่อคนโพสต์
// นำ ArrayPost มา Render ใน list แล้วแสดงบนหน้า UI

const posts = [
    { id: 1, message: 'หลังธูปคือรูปเธอ', date: '2023-08-23', author: 'tar' },
    {
        id: 2,
        message: 'ความสำเร็จอยู่ไม่ไกล แต่อยู่ไหนก็ไม่รู้',
        date: '2023-07-23',
        author: 'alac',
    },
    { id: 3, message: 'เข้าทุกคาบ แต่ไม่ทราบอะไรเลย', date: '2023-07-23', author: 'pete' },
];

function PostItem(props) {
    // props = { data : postObj }
    // postObj = {id:number, message:string,date:string, author:string}
    return (
        <div>
            <h1>{props.data.message}</h1>
            <p>
                {props.data.author.toUpperCase()} :{props.data.date}
            </p>
        </div>
    );
}
// #2
function PostList() {
    return (
        <div className='container'>
            {posts.map((postObj, index) => (
                <PostItem
                    key={postObj.id}
                    // key={index}
                    data={postObj}
                />
            ))}
        </div>
    );
}

// #1
// function PostList() {
//     return (
//         <div className='container'>
//             {posts.map((postObj) => (
//                 <div>
//                     <h1>{postObj.message}</h1>
//                     <p>
//                         {postObj.author.toUpperCase()} :{postObj.date}
//                     </p>
//                 </div>
//             ))}
//         </div>
//     );
// }
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<PostList />);
