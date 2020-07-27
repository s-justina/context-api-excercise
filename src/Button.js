import React from "react";

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
    console.log(children)
    return(
        <div>
            <button style={styles[theme]}>
                {children} {theme}
            </button>
        </div>
    )
};

export default Button;