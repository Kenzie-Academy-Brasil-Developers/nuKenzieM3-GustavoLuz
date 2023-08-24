import { useState } from "react";
import { Header } from "../components/Header"
import { NuKenzieForm } from "../components/sections/FormSection"
import { NuList } from "../components/sections/NuListSection";
import { TotalBalanceSection } from "../components/sections/BalanceSection";
import "../styles/index.scss";


function App() {

  const [balanceList, setList] = useState([])

  const addData = (data) => {
    const newData = { ...data }
    setList([...balanceList, newData])

  }

  const deleteBalanceList = (uuid) => {
    const deleteItemList = balanceList.filter(balance => balance.uuid != uuid)
    setList(deleteItemList)
  }

  return (
    <>
      <Header />
      <main className="container">
        <NuKenzieForm addData={addData} />
        <TotalBalanceSection balanceList={balanceList} />
        <NuList balanceList={balanceList} deleteBalanceList={deleteBalanceList} />
      </main>
    </>
  )
}

export default App
