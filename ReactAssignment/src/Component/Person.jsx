import React from "react";

function Person(props) {
    const name = 'Sunil Kumar Kashyap'
    const age = 22
    return (
        <>
            <p>My Name is {name} </p>
            <p>I am {age} years old</p>

            <h1>Welcome to the React Course </h1>           
            <p>Hello My Dear <br/> 
                My Name is {props.name}. I am a {props.age} years old.
            </p>

        </>
    )
}

export default Person;