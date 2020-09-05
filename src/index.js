import React, { useState } from 'react';
import { render } from 'react-dom';
import { DatePicker, message, Alert } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import {Button} from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Fala!</Button>
      </header>
    </div>
  )
}

render(<App />, document.getElementById('root'));