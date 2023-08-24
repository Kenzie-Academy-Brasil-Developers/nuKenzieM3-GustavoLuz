

export const TotalBalanceSection = ({balanceList}) =>{
    console.log(balanceList.value)
    console.log(typeof  balanceList.value === "number")

    const totalBalance = balanceList.reduce((amount, balance) => { console.log(typeof amount)
        return balance.type === "Entrada" ? amount + Number(balance.value) : amount - Number(balance.value);
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
                    {/* <p>{totalBalance.toLocaleString("pt-BR", { style: "currency", currency: "BRL",})}</p> */}
                    <p>{totalBalance.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 })}</p>
                </h2>
                <p className="paragraph grey">O valor se refere ao saldo</p>
            </>
        )}
            </div>
        </section>
    )
}