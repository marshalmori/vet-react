import { useState, useEffect } from "react"

import Error from "./Error";

const Formulario = ({paciente, pacientes, setPacientes }) => {
  const [nombre, setNombre] = useState('');
  const [proprietario, setProprietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      const {nombre, proprietario, email, fecha, sintomas} = paciente;
      setNombre(nombre);
      setProprietario(proprietario);
      setEmail(email);
      setFecha(fecha);
      setSintomas(sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).slice(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if([nombre, proprietario, email, fecha, sintomas].includes('')){
       console.log('Tem pelo menos um campo vazio.');
       setError(true);
       return;
    }
    setError(false);

    //Objeto do paciente 
    const objetoPaciente = {
      nombre, 
      proprietario, 
      email, 
      fecha, 
      sintomas,
      id: generarId(),
    }

    setPacientes([...pacientes, objetoPaciente]);

    // Reiniciar o formulário para ficar vazio (limpar)
    setNombre("");
    setProprietario("");
    setEmail("");
    setFecha("");
    setSintomas("");


  }

  return (
    <div className="md:w-1/2 lg:w-2/5">

        <h2 className="text-2xl text-center mb-5">
          <span className="text-indigo-600 font-bold">
            Gerenciar Pacientes
          </span>
        </h2>

        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
          { error && <Error><p>Todos os campos são obrigatórios.</p></Error>}
          
          <div className="mb-5">
            <label htmlFor="paciente" className="block text-gray-700 uppercase font-bold">
              Nome Paciente
            </label>
            <input 
              id="paciente"
              type="text" 
              placeholder="Nome do Paciente"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="proprietario" className="block text-gray-700 uppercase font-bold">
              Nome Proprietário
            </label>
            <input 
              id="proprietario"
              type="text" 
              placeholder="Nome do Proprietário"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
              value={proprietario}
              onChange={(e) => setProprietario(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email
            </label>
            <input 
              id="email"
              type="email" 
              placeholder="Email de contato"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
              Previsão de Alta
            </label>
            <input 
              id="alta"
              type="date" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Descrição Sintomas
            </label>
            <textarea 
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
              placeholder="Descrever os sintomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            />
          </div>

          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 shadow-md text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
            value="Adicionar Paciente"
          />

        </form>
    </div>
  )
}

export default Formulario