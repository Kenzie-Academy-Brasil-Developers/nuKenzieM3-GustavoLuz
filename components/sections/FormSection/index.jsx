import { useState } from "react"
import { Input } from "../../Input"
import { Select } from "../../Select"
import style from "./style.module.scss"


export const NuKenzieForm = ({ addData }) => {

    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("Entrada")


    const submit = (event) => {
        event.preventDefault()
        addData({
            uuid: crypto.randomUUID(),
            description: description,
            value: value,
            type: type
        })
        setDescription("")
        setValue("")
        setType("Entrada")
    }

    return (
        <div>
            <form onSubmit={submit} className={style.form} >
                <div>
                    <Input
                        type={"text"}
                        id={"description"}
                        placeholder={"Digite aqui sua descrição"}
                        value={description}
                        setValue={setDescription}
                        label={"Descrição"}
                        required={true}
                    />

                    <span className="paragraph">Ex: Compra de roupas</span>
                    <Input
                        type={"number"}
                        id={"value"}
                        placeholder={"Digite aqui o seu valor"}
                        value={value}
                        setValue={setValue}
                        label={"Valor (R$)"}
                        required={true}
                    />

                    <Select value={type} setValue={setType}>
                        <option value="Entrada">Entrada</option>
                        <option value="Despesa">Despesa</option>
                    </Select>

                    <button className="btn primary" type="submit">Inserir Valor</button>
                </div>

            </form>
        </div>

    )
}