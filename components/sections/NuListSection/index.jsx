import { NuCard } from "./NuListCard"


export const NuList = ({balanceList, deleteBalanceList}) =>{

    return (
       (balanceList.length === 0 ?(
        <div>
            <h3>Resumo Financeiro</h3>
            <p>Você ainda não possui nenhum lançamento</p>
        </div>
       ):
       <section >
                <div>
                    <h3 className="">Resumo Financeiro</h3>
                    <div>
                        <ul>
                        {balanceList.map((balance) => (
                            <NuCard 
                            description={balance.description} value={balance.value} type={balance.type} key={balance.uuid} deleteBalanceList={deleteBalanceList} id={balance.uuid}/>
    
                            ))}
                        </ul>
                    </div>
                </div>
            </section>      
        ))
}