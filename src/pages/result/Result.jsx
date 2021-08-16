import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import "./result.css";

const Result = () => {
    const [candidates, setcandidates] = useState(0);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/voteSummary")
        .then(response => {
            setcandidates(response.data)
        })
        
    }, []);

    return (
        <div>
            <Link style={{"textDecoration":"none"}} to="/">Go to Home Page</Link>
            <h1>Vote Summary</h1>
            <table className="table1">
                <tr className="tr1">
                    <th className="th1">Name</th>
                    <th className="th1">Votes</th>
                </tr>
            {candidates && candidates.map((candidate)=>(
                <tr className="tr1">
                    <td className="td1">{candidate.name}</td>
                    <td className="td1">{candidate.votes}</td>
                </tr>
            ))}
            </table>
            
        </div>
    );
}


export default Result;
