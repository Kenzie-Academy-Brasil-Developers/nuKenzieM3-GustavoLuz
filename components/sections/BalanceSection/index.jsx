

export const TotalBalanceSection = ({balanceList}) =>{
    
    const totalBalance = balanceList.reduce((amount, balance) => {
        return balance.type === "Entrada" ? amount + balance.value : amount - balance.value;
    }, 0);

    return (
        <section className={"container"}>
            <div>
            {balanceList.length === 0 ? (
            <>
            </>
        ) : (
            <>
                <h2 className="title two"> Valor total: 
                    <p>{totalBalance.toLocaleString("pt-BR", { style: "currency", currency: "BRL",})}</p>
                </h2>
                <p className="paragraph grey">O valor se refere ao saldo</p>
            </>
        )}
            </div>
        </section>
    )
}