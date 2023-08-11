

export const Input = ({type, id, placeholder, value, setValue, label, required}) => {

    return (
        <>
        <label htmlFor={id}> {label}</label>
        <input type={type} name ={id} id ={id} placeholder= {placeholder} value ={value} onChange={(event) => setValue(event.target.value)} required = {required} />
        </>
    )
}