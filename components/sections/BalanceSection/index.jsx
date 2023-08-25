import style from "./style.module.scss"

export const TotalBalanceSection = ({ balanceList }) => {

    const totalBalance = balanceList.reduce((amount, balance) => {
        return balance.type === "Entrada" ? amount + Number(balance.value) : amount - Number(balance.value);
    }, 0);

    return (
        <section>
            {balanceList.length === 0 ? (
                <>
                </>
            ) : (

                <div className={style.balanceContainer}>
                    <div className={style.valueDiv}>
                        <h2 className="title three"> Valor total: </h2>
                        <p className="paragraph primary">{totalBalance.toLocaleString("pt-BR", { style: "currency", currency: "BRL", })}</p>
                    </div>
                    <p className="paragraph grey">O valor se refere ao saldo</p>
                </div>

            )}

        </section>
    )
}