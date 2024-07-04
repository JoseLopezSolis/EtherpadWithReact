import React, {useEffect, useState} from 'react'
import { constructUrl } from "../api/apiConstructor"
import axios from "axios";

export default function GetPads() {
  const [pads, setPads] = useState();
  const [error, setError] = useState('');
  const url = constructUrl('1.2.1', 'listAllPads');

  useEffect(() => {
    fetchPads();
  },[])

  const fetchPads = async () => {
    try {
      const response = await axios.get(url); //Get list of padsID
      // Validate the response data
      if (response.data.data.length > 0) setPads(response.data.data.padIDs);
      else setError("No hay pads existentes")
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Pad List</h1>
      <ul>
        {pads ? pads.map((padName, index) => (
            <li key={index}>{padName}</li>
        )): error}
        {console.log(pads)}

      </ul>
    </div>
  )
}
