import React from "react";
import {ThemeConsumer} from './ThemeContext';

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

const Button = ({children})=>{
    return(
        <div>
            <ThemeConsumer>
                {value =>(
                <button style={styles[value]}>
                    {children} {value}
                </button>
                )}
            </ThemeConsumer>

        </div>
    )
};

export default Button;