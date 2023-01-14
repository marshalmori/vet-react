

const Paciente = ({paciente, setPaciente}) => {

  const {nombre, proprietario, email, fecha, sintomas} = paciente;

  return (
    <div  className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Nome: {" "}
      <span className="font-normal normal-case">{nombre}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
      Proprietário: {" "}
      <span className="font-normal normal-case">{proprietario}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
      Email: {" "}
      <span className="font-normal normal-case">{email}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
      Previsão de Alta: {" "}
      <span className="font-normal normal-case">{fecha}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
      Sintomas: {" "}
      <span className="font-normal normal-case">{sintomas}</span>
    </p>

    <div className="flex justify-between mt-5">
        <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold
                    uppercase rounded-lg"
            onClick={() => setPaciente(paciente)}
            >
            Editar
        </button>

        <button 
         type="button"
         className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold
                    uppercase rounded-lg">
            Deletar
        </button>
    </div>
  </div>
  )
}

export default Paciente