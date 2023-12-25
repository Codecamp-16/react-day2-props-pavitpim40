/******************************************************************
 * Lists
 *****************************************************************/

/**********************************************
 *  create root from ReactDOM
 **********************************************/
const root = ReactDOM.createRoot(document.getElementById('root'));

/**********************************************
 * Data
 **********************************************/
const authors = [
  {
    name: 'Sarah Waters',
    age: 55,
    country: 'United Kingdom',
    books: ['Fingersmith', 'The Night Watch'],
  },
  {
    name: 'Haruki Murakami',
    age: 71,
    country: 'Japan',
    books: ['Norwegian Wood', 'Kafka on the Shore'],
  },
  {
    name: 'Chimamanda Ngozi Adichie',
    age: 43,
    country: 'Nigeria',
    books: ['Half of a Yellow Sun', 'Americanah'],
  },
];

const books = [
  {
    name: 'To Kill a Mockingbird',
    pages: 281,
    title: 'Harper Lee',
    price: 12.99,
  },
  {
    name: 'The Catcher in the Rye',
    pages: 224,
    title: 'J.D. Salinger',
    price: 9.99,
  },
  {
    name: 'The Little Prince',
    pages: 85,
    title: 'Antoine de Saint-Exupéry',
    price: 7.99,
  },
];

/**********************************************
 * Component
 **********************************************/

export const LargeAuthorListItems = ({ author }) => {
  const { name, age, country, books } = author;
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>{books.map((book) => () => <li key={book}>{book}</li>)}</ul>
    </>
  );
};

export const SmallAuthorListItems = ({ author }) => {
  const { name, age } = author;
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};

export const LargeBookListItem = ({ book }) => {
  const { name, price, title, pages } = book;

  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>Title:</h2>
      <p>{title}</p>
      <p># of Pages: {pages}</p>
    </>
  );
};

export const SmallBookListItem = ({ book }) => {
  const { name, price } = book;
  return (
    <h2>
      {name} / {price}
    </h2>
  );
};

/**********************************************
 * Layout Component
 **********************************************/

export const RegularList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};

export const NumberedList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <>
          <h3>{i + 1}</h3>
          <ItemComponent key={i} {...{ [sourceName]: item }} />
        </>
      ))}
    </>
  );
};

/**********************************************
 * App
 **********************************************/
function App() {
  return (
    <>
      <RegularList items={authors} sourceName='author' ItemComponent={SmallAuthorListItems} />;
      <RegularList items={authors} sourceName='author' ItemComponent={LargeAuthorListItems} />;
      <RegularList items={books} sourceName='book' ItemComponent={SmallBookListItem} />;
      <RegularList items={books} sourceName='book' ItemComponent={LargeBookListItem} />;
      <NumberedList items={books} sourceName='book' ItemComponent={LargeBookListItem} />;
    </>
  );
}
