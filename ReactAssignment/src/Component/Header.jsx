import React from "react";

function Header(props){
    return (
        <>
            <h1 className="header">
                {props.title}
            </h1>

        </>
    )
}

export default Header;
