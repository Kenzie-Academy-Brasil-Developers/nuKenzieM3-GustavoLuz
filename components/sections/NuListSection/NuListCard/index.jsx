

export const NuCard = ({description, value, type, uuid, deleteBalanceList}) => {
    
    return(
        <>
            <li >
                <div>
                    <div>
                        <h3 className="title three">{description}</h3>
                        <p className="paragraph grey">{type }</p>
                    </div>
                    <div>
                    <p className="paragraph grey">{value.toLocaleString("pt-BR", { style: "currency", currency: "BRL",})}</p>
                    <button className="btn grey" onClick={() => deleteBalanceList(uuid)}>Excluir</button>
                    </div>
                </div>
            </li>
        </>
        
    )
}