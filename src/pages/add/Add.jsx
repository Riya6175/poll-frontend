import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios'; 
import {Link} from "react-router-dom";
import "./style.css";
const Add = () => {
    const candidateData = useRef("null");
    const [candidates, setcandidates] = useState(null);
    const [dataUpdated, setdataUpdated] = useState(0);

    function addMember() {
        const form = candidateData.current
        const data = {
            "name" : form['candidateName'].value
        }
        axios.post('http://127.0.0.1:5000/add', data)
            .then(response => {
                setdataUpdated(dataUpdated+1)
            });
            
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/voteSummary')
            .then(response => {
                const validify = response.data;
                setcandidates(validify)
    });
    }, [dataUpdated]);

    

    return (
        
        <div>
            <Link style={{"textDecoration":"none"}} to="/">Go to Home Page</Link>
            <h3>Add Candidate Name Here!</h3>
            <form method="post" ref={candidateData}>
                <input type="text" name="candidateName" id="candidateName" placeholder="Enter Name"/>
                <input className="btn" type="button" onClick={addMember} name= "Submit" value = "Submit"/>
            </form>
            <div>
                {candidates && candidates.map((candidate) => (
                    <div>
                        <ul><li>
                        {candidate.name}
                        </li></ul>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Add;
