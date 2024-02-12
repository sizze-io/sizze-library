import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  Sznavbar  from '../src/Sznavbar';

const App = () => {
  return (
    <div>
      <Sznavbar text="text"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
