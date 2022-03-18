import React, {useEffect, useRef, useState} from "react";
import axios from "axios";

const ExTwo = () =>{

    const [data, setData] = useState([]);
    const [name, setName] = useState("undefined");
    const [agency, setAgency] = useState("undefined");
    const [launches, setLaunches] = useState("undefined");
    const [status, setSatus] = useState("undefined");

    const astroPeeps = useRef(null);
 

    useEffect(() =>{
        axios.get('https://api.spacexdata.com/v4/crew')
        .then((response) => {
            setData(response.data);
            console.log(response.data);
        })
    }, []);


    const getAstro = () =>{
  
        let individualName = astroPeeps.current.value;
        let individualId = '';

        for(let i = 0; i < data.length; i++){
         if(data[i].name === individualName){
            individualId = data[i].id;
         }
        }

        let urlEnd = 'https://api.spacexdata.com/v4/crew/' + individualId;

        axios.get(urlEnd)
        .then((response) => {
            //console.log(response.data);
            setName(response.data.name);
            setAgency(response.data.agency);

            let launches = response.data.launches.length;

            setLaunches(launches);
            setSatus(response.data.status);
        })
    }


    return (
        <div className="componentInterior">
        <h3>Exercise Two: useEffect</h3>

            <div className="exCon">
                {
                    data.map(item => <li key={item.id}>{item.name}</li>)
                }
            </div>

            <div className="exCon">
               <select ref={astroPeeps}>
                   {data.map(item => <option key={item.id}>{item.name}</option>)}
               </select>
            </div>

            <div className="exCon">
                <button onClick={getAstro} className="btn btn-secondary">See More Info</button>
                <p></p>
                <p>Name & Surname: {name} </p>
                <p>Agency: {agency} </p>
                <p>Launches: {launches}</p>
                <p>Status: {status} </p>
            </div>

        </div>

        
    );
}

export default ExTwo;

