

export const NuCard = ({description, value, type, uuid, deleteBalanceList}) => {
    
    return(
        <>
            <li >
                <div>
                    <div>
                        <h2>{description}</h2>
                        <p>{(type == 0 ? "Entrada" : "Despesa")}</p>
                    </div>
                    <div>
                    <p className="">{value.toLocaleString("pt-BR", { style: "currency", currency: "BRL",})}</p>
                    <button className="btn grey" onClick={() => deleteBalanceList(uuid)}>Excluir</button>
                    </div>
                </div>
            </li>
        </>
        
    )
}