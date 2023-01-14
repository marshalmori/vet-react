import { Fragment } from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <Fragment>
          <h2 className="text-2xl text-center mb-5">
            <span className="font-bold">
              Pacientes e Consultas
            </span>
          </h2>
          {pacientes.map(paciente => (
            <Paciente 
            key={paciente.id}  
            paciente={paciente} 
            setPaciente={setPaciente}
            />
          ))}
        </Fragment>
      ) : (
        <Fragment>
          <h2 className="text-2xl text-center mb-5">
            <span className="font-bold">
              Pacientes e Consultas
            </span>
          </h2>
          <div>
          <h3 className="text-indigo-600 text-center mb-5">
            <p className="text-xl font-bold">
              A lista de pacientes está vazia
            </p>
            <p className="text-sm">
              Adicione um paciente no formulário
            </p>
          </h3>
          </div>

        </Fragment>
      )}

       

       
      
    </div>
  )
}

export default ListadoPacientes;