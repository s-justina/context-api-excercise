import React from 'react';
import './styles.css';
import Sidebar from './Sidebar';
import Page from './Page'
import {ThemeProvider} from "./ThemeContext";

export const ThemeContext = React.createContext('dark');

function App() {
  return (
    <div className="App">
<h2>Start editing go see magic happen!</h2>
        <ThemeProvider >
            <Page>
                <Sidebar theme='dark'/>
            </Page>
        </ThemeProvider>
    </div>
  );
}

export default App;
