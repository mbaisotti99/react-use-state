import langArr from "./assets/languages"

import { useState } from "react"

function App() {

  const state = useState(null)
  const [seeState, changeState] = state
  

  return (
    <>
      {langArr.map((curLang) =>{
    const show = () =>{
      changeState(curLang)    
    }
        return (
          <button className="btn btn-primary mx-3" key={curLang.id} onClick={show}>
            {curLang.title}
          </button>

        )
      })}
      {seeState && <p> {seeState.description} </p>}
    </>
  )
}

export default App
