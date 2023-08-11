export const Select = ({ children, value, setValue }) => {
    return (
        <div>
            <label> Selecione o tipo de valor: </label>
            <select value={value} onChange={(event) => setValue(event.target.value)}>
                
                {children}
            </select>
        </div>
    )
}