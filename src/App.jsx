import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  // const [pacientes, setPacientes] = useState(() => JSON.parse(localStorage.getItem('pacientes')) || []);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }

    obtenerLS();
  }, [])

  //useEffect - Tem mudança em pacientes? Então executa o código dentro de useEffect
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])


  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    
    setPacientes(pacientesActualizados);
  }



  return (
    <div className="container mx-auto mt-5">
     <Header/>

     <div className="mt-8 md:flex">
        <Formulario  
          paciente={paciente}
          setPaciente={setPaciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
     </div>

    </div>
  )
}

export default App
