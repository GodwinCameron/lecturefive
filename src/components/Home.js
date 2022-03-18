import React, {useState} from 'react'

const Home = () =>{

    const [user, setUser] = useState({
        first: "James",
        last: "Turner", 
        age: 34, 
        account: true 
    });



        let textInput = React.createRef();

        function handleClick(){

           

            let newValue = textInput.current.value;

            if(!newValue){
                newValue = "Undefined"
            }
            console.log(textInput.current.value);

             setUser({
            first: newValue
        });
 
        }

    
    return (
        <div>
            <p>{user.first} has awoken</p>
            <input ref={textInput} placeholder='update first name'/>
            <button onClick={handleClick}>Update</button>
        </div>
    );
}

export default Home;


