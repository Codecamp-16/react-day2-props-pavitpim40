const friends = ['Tony', 'Steve', 'Peter', 'Natasha'];

function FriendList() {
  return (
    <div className='container'>
      {friends.map((name) => (
        <div className='card'>
          <div className='card2'>{name}</div>
        </div>
      ))}
    </div>
  );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<FriendList />);
