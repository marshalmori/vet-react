import { useState, useEffect } from "react"

const Formulario = () => {
  const [nombre, setNombre] = useState('');

  

  return (
    <div className="md:w-1/2 lg:w-2/5">

        <h2 className="text-2xl text-center mb-5">
          <span className="text-indigo-600 font-bold">
            Gerenciar Pacientes
          </span>
        </h2>

        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
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