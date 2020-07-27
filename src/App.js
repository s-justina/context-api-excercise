import React from 'react';
import './styles.css';
import Sidebar from './Sidebar';
import Page from './Page'

function App() {
  return (
    <div className="App">
<h2>Start editing go see magic happen!</h2>
      <Page>
        <Sidebar theme='dark'/>
      </Page>
    </div>
  );
}

export default App;
