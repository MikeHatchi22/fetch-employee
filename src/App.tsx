import { useState } from 'react';
import './App.css'
import EmployeeCard from './EmployeeCard'

const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    fetch("https://randomuser.me/api?nat=en")
      .then(response => response.json())
      .then(data => {
        setEmployee(data.results[0]);
      })
      .catch(error => console.error("Error fetching employee data:", error));
  }
  return (
    <>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </>
  )
}

export default App
