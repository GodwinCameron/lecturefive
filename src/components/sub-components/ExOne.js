import React from 'react';
import axios from 'axios';
import {useState} from 'react'


const ExOne = () => {

    const [dataReturn, setDataReturn] = useState([]);
    const populateData = (data) => {dataReturn.push(data)}
    

    const getNewData = (event) => {
        let newData = event.target.value;
        console.log(newData);

        const baseUrl = 'https://api.spacexdata.com/v4/'
        let newUrl = baseUrl + newData;
        
        axios.get(newUrl)
        .then((res)=>{
                populateData(res.data)
           console.log(res.data);
           console.log(dataReturn);
        })
        .catch((err)=>{
            console.log(err);
        });

    
    }


    return (
        <div>
        <select onChange={getNewData}>
            <option>launches</option>
            <option>crew</option>
            <option>capsules</option>
            <option>cores</option>
            <option>ships</option>
            <option>starlink</option>
        </select>

       <p>{dataReturn[0].data}</p>

        </div>
    );
}

export default ExOne;