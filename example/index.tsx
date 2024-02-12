import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import { Sznavbar } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
      <Sznavbar text="text"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
