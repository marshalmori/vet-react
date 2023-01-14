

const Paciente = ({paciente}) => {

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
  </div>
  )
}

export default Paciente