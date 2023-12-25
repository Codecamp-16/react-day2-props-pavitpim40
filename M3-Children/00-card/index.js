/******************************************************************
 * Children Props
 * - ส่ง Props โดยการเขียนเป็น Children ของ Component
 * - Example 1 : <Parent>ChildrenText</Parent>
 * - Example 2 : <Parent><Children/></Parent>
 * - Example 3 : <Parent><Children/><Children/></Parent>
 * - Example 4 : <Parent><Children1/><Children2/></Parent>
 *****************************************************************/

/**********************************************
 *  create root from ReactDOM
 **********************************************/
const root = ReactDOM.createRoot(document.getElementById('root'));

/**********************************************
 * Ex-1 : Card Component
 **********************************************/

const CardComponent = ({ header, footer, children }) => {
  return (
    <div className='card'>
      <div className='card-header'>{header}</div>
      <div className='card-body'>{children}</div>
      <div className='card-footer'>{footer}</div>
    </div>
  );
};

const App = () => {
  return (
    <div className='container'>
      <div className='card-container'>
        <CardComponent header='Card Header' footer='Card Footer'>
          {/* This is treated as props.children */}
          <div class='img-container'>
            <img src='https://picsum.photos/200/300' />
          </div>
          <p>This is the body content of the card.</p>
        </CardComponent>
      </div>
    </div>
  );
};

root.render(<App />);
