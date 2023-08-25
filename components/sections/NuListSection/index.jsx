import { NuCard } from "./NuListCard"
import style from "./style.module.scss"

export const NuList = ({balanceList, deleteBalanceList}) =>{

    return (
        (balanceList.length === 0 ? (

            <div className="container">
                <h3 className="title three">Resumo Financeiro</h3>
                <p className="paragraph grey">Você ainda não possui nenhum lançamento</p>
            </div>
        ) :
            <div className="container">
                <section >
                    <div className={style.flexBox}>
                        <h3 className="title three">Resumo Financeiro</h3>
                        <div className={style.flexBox}>
                            <ul className={style.flexBox}>
                                {balanceList.map((balance) => (
                                    <NuCard
                                        description={balance.description}
                                        value={balance.value}
                                        type={balance.type}
                                        key={balance.uuid}
                                        deleteBalanceList={deleteBalanceList}
                                        uuid={balance.uuid} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        ))
}