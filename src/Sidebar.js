import React from "react";
import Button from './Button';

const Sidebar = props=>{
    return(
        <div>
            <Button theme={props.theme}>
                ThemedButton
            </Button>
        </div>
    )
};

export default Sidebar;