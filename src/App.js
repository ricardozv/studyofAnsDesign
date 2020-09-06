import React from 'react';
import {Button} from 'antd';
import './App.css';


function App() {
  return (
    <div className="App">
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>

    <Button>Default</Button>
    <Button disabled>Default(disabled)</Button>

    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button type="danger" block>
      Danger
    </Button>
    <Button type="link" block>
      Link
    </Button>
    
    </div>
  );
}

export default App;