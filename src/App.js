import React from 'react';
import './styles.css';
import Sidebar from './Sidebar';
import Page from './Page'

export const ThemeContext = React.createContext('dark');

function App() {
  return (
    <div className="App">
<h2>Start editing go see magic happen!</h2>
        <ThemeContext.Provider value='dark'>
            <Page>
                <Sidebar theme='dark'/>
            </Page>
        </ThemeContext.Provider>
    </div>
  );
}

export default App;
