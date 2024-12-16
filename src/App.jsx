import langArr from "./assets/languages"
import Butt from "./components/Button"
import Card from "./components/Card"
import Head from "./components/Header"

import { useState } from "react"

function App() {

  const state = useState(null)
  const [curLanguage, changeState] = state


  return (
    <>
      <Head />
      <div className="container">
        <div className="buttCont">
        {langArr.map((curLang) => {


          const show = () => {
            curLanguage === null || !isSelect ? changeState(curLang) : changeState(null)
          }

          let isSelect = curLanguage === curLang

          return (
            <Butt
              id={curLang.id}
              title={curLang.title}
              show={show}
              isSelected={isSelect}
            />

          )
        })}
        </div>
        {curLanguage && <Card
          tit={curLanguage.title}
          desc={curLanguage.description}
          img={`/${curLanguage.title.toLowerCase()}.png`}
        />
        }
      </div>
    </>
  )
}

export default App
