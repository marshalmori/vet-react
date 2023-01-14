import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        <h2 className="text-2xl text-center mb-5">
          <span className="font-bold">
            Pacientes e Consultas
          </span>
        </h2>

        <Paciente/>
        <Paciente/>
        <Paciente/>
        <Paciente/>
        <Paciente/>
      
    </div>
  )
}

export default ListadoPacientes;