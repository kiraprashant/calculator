import React, { useState } from 'react'

const Calculator = () => {
  const [calc , setCalc] = useState("");

  const updatevalue = (value) =>{
    setCalc(calc+value)
  }

  const backspace = () =>{
    if(calc === ""){
      return
    }
    else{
     // const value = calc.slice(0,-1)
      setCalc(calc.slice(0,-1))
    }
  }

 const calculate = () =>{
   try{
  setCalc(eval(calc).toString())
   }
   catch(e){
     setCalc("error");
   }
 }

 const clear = () =>{
  setCalc("")
 }

  return (
    <div className='main'>
      <div className='container'>
        <div className='calculator_border'>
           <div className='result'>{calc ? calc:0}</div>
           <div>
            <table>
            <tfoot>
            <tr>
             <td colSpan={2}><button onClick={clear} className='highlight'>Clear</button></td>
             <td><button  className='highlight' onClick={backspace}>C</button></td>
             <td><button onClick={()=> updatevalue("/")} className='highlight'>/</button></td>
            </tr>
            <tr>
             <td><button onClick={()=> updatevalue("9")}>9</button></td>
             <td><button onClick={()=> updatevalue("8")}>8</button></td>
             <td><button onClick={()=> updatevalue("7")}>7</button></td>
             <td><button onClick={()=> updatevalue("*")} className='highlight'>*</button></td>
            </tr>
            <tr>
             <td><button onClick={()=> updatevalue("6")}>6</button></td>
             <td><button onClick={()=> updatevalue("5")}>5</button></td>
             <td><button onClick={()=> updatevalue("4")}>4</button></td>
             <td><button onClick={()=> updatevalue("+")} className='highlight'>+</button></td>
            </tr>
            <tr>
             <td><button onClick={()=> updatevalue("3")}>3</button></td>
             <td><button onClick={()=> updatevalue("2")}>2</button></td>
             <td><button onClick={()=> updatevalue("1")}>1</button></td>
             <td><button onClick={()=> updatevalue("-")} className='highlight'>-</button></td>
            </tr>
            <tr>
             <td><button onClick={()=> updatevalue(".")}>.</button></td>
             <td colSpan={2} onClick={()=> updatevalue("0")}><button>0</button></td>
             <td><button  className='highlight' onClick={calculate}>=</button></td>
            
            </tr>
           </tfoot> 
            
             </table>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator