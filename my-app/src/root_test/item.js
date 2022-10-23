 import React, { useState } from 'react';


export function Item() {
  const [xl,setxl] = useState(0);
  const [xr,setxr] = useState(0);
  const [Errror,Seterror] = useState(0);

const Cal_bis=()=>
{

  var iteration = 0;
  var xM = 0

  var check = 1
  var xOld = 0;
  var fxM=0,fxR=0;
  var  xL = Number(xl)
  var  xR = Number(xr)

  while(check > 0.000001){
      xOld = xM;

      xM = (xL+xR)/2
      fxM = 13 - (xM*xM*xM*xM);
      fxR = 13 - (xR*xR*xR*xR);
      if(fxM*fxR > 0){
        xR = xM;
      }
      else if(fxM*fxR < 0){
         xL= xM;
      }
      if(iteration > 0){
        check = Math.abs((xM - xOld)/xM)*100;
        console.log("|xM = %f|   Error Estimates : %f\n",xM,check);}
        else 
        console.log("|xM = %f|   Error Estimates : - \n",xM);
        iteration++;
  }
  Seterror(xM)

}



  const Xl = (event)=>{
    setxl(event.target.value)
    };

    const Xr = (event)=>{
      setxr(event.target.value)

        };
    

  return (
  
    <>
    <h1>Bissection</h1>
     <h2>XL = <input type="number" onChange={Xl} /> </h2>
     <h2>XR =<input type="number" onChange={Xr} /> </h2>
      <button onClick={e=>Cal_bis()}>Cal</button>
      <h2>Error = {Errror}</h2>
      
    </>
  );
}






























function Test_eiei(){
  const [val,setVal]=useState([[]]);
  const [array_size,set_array_size]=useState(0)
  const [show_total,set_show_total]=useState([])

  
  var array = [[]]
   const handleAdd=(e)=>{

    for(var i=0;i<Number(e.target.value)-1;i++)
    {
      array[i]= [];
      console.log(array);
      for(var k=0;k<Number(e.target.value);k++)
      {
        array[i][k]= `${i} ${k}`;

      }
      setVal(array)
      set_array_size((e.target.value)-1)
    }
   }
   

   const cal_test=()=>{
          var x = []
          let i =0
          let k =0
          let j =0
          var temp = 0
          var size_array = Number(array_size)

          for(k=0;k<size_array;k++){
            for( i=k+1;i<size_array;i++){
               temp = val[i][k]/val[k][k]
                for(j=k+1;j<=size_array;j++){
                    val[i][j] = val[i][j] - temp*val[k][j]
                }
            }
          }

          for(i=size_array-1;i>=0;i--){
            x[i] = val[i][3]
            for(j=i+1;j<size_array;j++){
                x[i] = x[i]-val[i][j]*x[j]
            }
            x[i] = x[i]/val[i][i]
          }

          for(i=0;i<size_array;i++){
            set_show_total(x)
            console.log(x[i])
          }
  }


   const handleChange=(rowIndex, columnIndex, e)=>{
    val[rowIndex][columnIndex] =  Number(e.target.value);
    console.log(val)
   }



return(
    <>
    <h1>Gauss_Elimination</h1>
    <input  placeholder="กรุณากรอกขนาด" type="number" onChange={handleAdd} />
    <br></br>
    <br></br>
    {val.map((row, rowIndex) => (
            <center>
            <tr>
              {row.map((column, columnIndex) => (
                <td >
                  <input id={column} onChange={e => handleChange(rowIndex, columnIndex, e)}
                  />
                </td>

              ))}
            </tr>
            </center>
          ))}
              <br></br>
              <br></br>
             <button onClick={e=>cal_test()}>Cal</button>
             {show_total.map((total,i)=>(
              <h1 id={i}>{total}</h1>

             ))

             
             }


    </>
);
}








export default Test_eiei;

