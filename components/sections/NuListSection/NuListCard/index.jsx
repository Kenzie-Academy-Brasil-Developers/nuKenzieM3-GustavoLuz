import style from "./style.module.scss"

export const NuCard = ({ description, value, type, uuid, deleteBalanceList }) => {

    return (
        <>
            <li>
                <div className={type === "Entrada" ? style.entrada : style.saida}>
                    <div className={style.container}>
                        <div className={style.titleContainer}>
                            <h3 className="title three">{description}</h3>
                            <p className="paragraph grey">{type}</p>
                        </div>
                        <div className={style.priceContainer}>
                            <p className="paragraph grey">{Number(value).toLocaleString("pt-BR", { style: "currency", currency: "BRL", })}</p>
                            <button className="btn grey" onClick={() => deleteBalanceList(uuid)}>Excluir</button>
                        </div>
                    </div>
                </div>
            </li>
        </>

    )
}