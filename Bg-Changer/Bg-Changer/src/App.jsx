import React from "react"
import BgColor from "./components/Card";
import { useCallback } from "react";
import { useState } from "react";

function App() {

  const colors = ["red","green","yellow","olive","orange","gray","purple","lavender","white","Black"];
  const [color,setColor] = useState(colors);

  return (

    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <div className="flex max-w-screen-xl mx-auto justify-center items-center">
        {colors.map((item,index) => <button onClick={() => {setColor(item)}} key={index} className="border border-black mr-3 px-3 py-2 rounded-md text-inherit" style={{backgroundColor:item}}>{item}</button>)}
      </div>
    </div>
  )
}

export default App
