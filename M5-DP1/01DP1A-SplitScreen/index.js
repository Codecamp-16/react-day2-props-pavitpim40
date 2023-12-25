/******************************************************************
 * SplitScreen
 *****************************************************************/

/**********************************************
 *  create root from ReactDOM
 **********************************************/
const root = ReactDOM.createRoot(document.getElementById('root'));

/**********************************************
 * Ex-1 : SplitScreen Basic
 **********************************************/

// const LeftSideComponent = ({ title }) => {
//   return <h2 style={{ backgroundColor: 'crimson' }}>{title}</h2>;
// };

// const RightSideComponent = ({ title }) => {
//   return <h2 style={{ backgroundColor: 'burlywood' }}>{title}</h2>;
// };

// const Container = styled.div`
//   display: flex;
// `;

// const MyDiv = styled.div`
//   width: 100px;
// `;
// const Panel = styled.div`
//   flex: ${(p) => p.flex};
// `;

export const SplitScreen = ({ Left, Right, leftWidth = 1, rightWidth = 1 }) => {
  return (
    <Container>
      <Panel flex={leftWidth}>
        <Left />
      </Panel>
      <Panel flex={rightWidth}>
        <Right />
      </Panel>
    </Container>
  );
};

/**********************************************
 * Ex-2 : SplitScreen Enhanced
 **********************************************/

// APP

// function App() {
//   return (
//     <SplitScreen leftWidth={2} rightWidth={1}>
//       <LeftSideComponent title='Right' />
//       <RightSideComponent title='Left' />
//     </SplitScreen>
//   );
// }

// export const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }) => {
//   const [left, right] = children;
//   return (
//     <Container>
//       <Panel flex={leftWidth}>{left}</Panel>
//       <Panel flex={rightWidth}>{right}</Panel>
//     </Container>
//   );
// };
