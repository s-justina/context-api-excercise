import React from "react";
import {ThemeContext} from "./App";

const styles = {
    dark: {
        backgroundColor: 'black',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    }
};

const Button = ({children, theme})=>{
    return(
        <div>
            <ThemeContext.Consumer>
                {value =>(
                <button style={styles[value]}>
                    {children} {value}
                </button>
                )}
            </ThemeContext.Consumer>

        </div>
    )
};

export default Button;