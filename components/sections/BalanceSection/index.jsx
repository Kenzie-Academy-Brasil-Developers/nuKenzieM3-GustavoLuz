

export const TotalBalanceSection = ({balanceList}) =>{
    
    const totalBalance = balanceList.reduce((amount, balance) => {
        return balance.type === "0" ? amount + balance.value : amount - balance.value;
    }, 0);

    return (
        <section className={""}>
            <div>
            {balanceList.length === 0 ? (
            <>
            </>
        ) : (
            <>
                <h3 className=""> Valor total: 
                    <p>{totalBalance.toLocaleString("pt-BR", { style: "currency", currency: "BRL",})}</p>
                </h3>
                <p className="">O valor se refere ao saldo</p>
            </>
        )}
            </div>
        </section>
    )
}