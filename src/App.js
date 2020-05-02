import React, { useState, useEffect } from 'react';
import FHIR from 'fhirclient';
import './App.css';

function App() {
  const [patients, setPatients] = useState({ entry: [] });

  useEffect(async () => {
    const fetchPatients = async () => {
      const client = FHIR.client({
        serverUrl: "http://spark.kufu.no/fhir"
      });
      client.request("Patient")
        .then(data =>
          setPatients(data)
        );
    }
    fetchPatients();
  }, []);

  return (
    <div className="App">
      <p>Patients</p>
      <ul>
        {patients.entry.map(item => (
          <li>
            {item.resource.name[0].family}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
