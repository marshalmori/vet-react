

const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Nome: {" "}
      <span className="font-normal normal-case">Hook</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
      Proprietário: {" "}
      <span className="font-normal normal-case">Marshal</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
      Email: {" "}
      <span className="font-normal normal-case">marshal@marshal.com</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
      Previsão de Alta: {" "}
      <span className="font-normal normal-case">12/05/2023</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
      Sintomas: {" "}
      <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Ad assumenda doloribus, voluptatibus id repudiandae nostrum 
        quam dolor ullam facere cumque voluptatem vero, delectus animi! Voluptate, itaque. 
        Sapiente quas nobis distinctio.
      </span>
    </p>
  </div>
  )
}

export default Paciente