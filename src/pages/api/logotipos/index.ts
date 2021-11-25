import clientes from "../bancoDeImagens";

const logotipos = (req, res) => {
    const logos = clientes.map((cliente) => cliente.image)
    res.status(200).json(logos)
}

export default logotipos