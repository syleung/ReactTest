import React from 'react';
import { render } from 'react-dom';
import Test from './Test';

const shoppingBag = [
  'Pork',
  'Chicken',
  'Beef',
];

const styles = {
  fontFamily: 'sans-serif',
  fontSize: 22,
};

const App = () => (
  <div style={styles}>
    <h3 style={{ textAlign: 'center' }}>Blah Blah Blah</h3>
    <h4>Meh</h4>
    <Test title="Buy these!!!" shoppingBag={shoppingBag}/>
  </div>
  // <div style={styles}>
  //   <Hello name="CodeSandbox" />
  //   <h2>Start editing to see some magic happen {'\u2728'}</h2>
  // </div>
);

render(<App />, document.getElementById('root'));
