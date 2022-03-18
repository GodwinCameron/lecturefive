import React from "react";
import { useRef, useState } from "react";

const ExOne = () =>{

    let namefield = React.createRef();
    let userVal = React.createRef();


const [counter, setCounter] = useState(0);

const [user, setUser] = useState({
    first: "Jim", 
    last: "Doe", 
    age: 34,
});

const [userSelect, setUserSelect] = useState("Option One");

const increment = () => {
    setCounter(counter + 1);
}

const updateUser = () => {
    let newName = namefield.current.value;
    setUser({first:newName});
}

const userSelection = () => {
    let selection = userVal.current.value;
    setUserSelect(selection);
}

    return (
        <div className="componentInterior">
            <h3>Exercise One: useState & Events</h3>
            <div className="exCon">
                <h6>The Count is: {counter}</h6>
                <button onClick={increment} className="btn btn-secondary">Increment Count</button>
            </div>

            <div className="exCon">
                <h6>{user.first} {user.last} has been Updated</h6>
                <input ref={namefield} placeholder="enter updated name here" />
                <button onClick={updateUser} className="btn btn-secondary">Update User</button>
            </div>

            <div className="exCon">
                <h6>The User has selected: {userSelect}</h6>
                <select onChange={userSelection} ref={userVal}>
                    <option>Option One</option>
                    <option>Option Two</option>
                    <option>Option Three</option>
                    <option>Option Four</option>
                    <option>Option Five</option>
                </select>
            </div>
            

            


        </div>
        
    );
}

export default ExOne;