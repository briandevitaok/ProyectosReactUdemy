import { useState } from "react";
import "./App.css";
import { ReservationForm } from "./components/ReservationForm";
import { ReservationsList } from "./components/ReservationsList";

function App() {
  const [revervations, setRevervations] = useState([]);

  console.log(revervations);

  const handleReservation = (formData) => {
    setRevervations([...revervations, formData]);
  };

  const handleDelete = (index) => {
    console.log("entre");
    const updateReservations = [...revervations];
    updateReservations.splice(index, 1);
    setRevervations(updateReservations);
  };
  return (
    <>
      <div className="container">
        <h1>Sitema de Reservas en Linea</h1>
        <ReservationForm handleReservation={handleReservation} />
        <ReservationsList
          handleDelete={handleDelete}
          revervations={revervations}
        />
      </div>
    </>
  );
}

export default App;
