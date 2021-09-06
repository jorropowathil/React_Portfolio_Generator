import React, { useState, useEffect } from "react";
import Axios from "axios";
import {useParams} from "react-router-dom";
import AboutMe from "./AboutMe"


export default function Public (){
    const {email} = useParams();
    const [port, setPort] = useState("")
    const [info, setInfo] = useState("")
    useEffect(() => { 
        Axios.get('/api/publicPortfolio/' + email).then(data => setPort(data.data));
        console.log(port);
    },[])
  

    useEffect(() => { 
        setInfo(port);
    },[port])

    return (
        <div>
            {port?(
            <AboutMe firstName={port.firstName}/>)  :
            null
        }
            {info.AboutMe!==undefined?(
                <div>
                    <h1>
                        {port.AboutMe.firstName} {port.AboutMe.lastName} 
                    </h1>
                    <p>{port.AboutMe.introduction}</p>
                    {port.Education.map(edu => {
                        return (
                          <div>
                              <h4>{edu.institution[0]}</h4>
                              <h4>{edu.degree[0]}</h4>
                              <h4>{edu.graduationDate[0]}</h4>
                          </div>
                        )
                    })}
                </div>
            ): null} 
            <h3>hello world</h3>
        </div>
    )
}; 
