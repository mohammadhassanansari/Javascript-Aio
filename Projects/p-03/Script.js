let CurrentPlayer="X";
let arr=Array(9).fill(null);


function CheckWin(){
    if(
        (arr[0]!==null && arr[0]===arr[1] && arr[1]===arr[2])||
        (arr[3]!==null && arr[3]===arr[4] && arr[4]===arr[5])||
        (arr[6]!==null && arr[6]===arr[7] && arr[7]===arr[8])||
        (arr[0]!==null && arr[0]===arr[3] && arr[3]===arr[6])||
        (arr[1]!==null && arr[1]===arr[4] && arr[4]===arr[7])||
        (arr[2]!==null && arr[2]===arr[5] && arr[5]===arr[8])||
        (arr[0]!==null && arr[0]===arr[4] && arr[4]===arr[6])||
        (arr[2]!==null && arr[2]===arr[4] && arr[4]===arr[6])
        
    )
   {
      document.write(`
  <html>
  <head>
    <style>
      body {
        background: #0d0d0d;
        color: #00ff9f;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: monospace;
      }
      h1 {
        text-shadow: 0 0 10px #00ff9f, 0 0 20px #00ff9f;
      }
    </style>
  </head>
  <body>
    <h1>Winner is ${CurrentPlayer} 🏆</h1>
  </body>
  </html>
`);
       return;
}
if(!arr.some((e)=>e===null)){
   document.write(`
  <html>
  <head>
    <style>
      body {
        background: #0d0d0d;
        color: #00ff9f;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: monospace;
      }
      h1 {
        text-shadow: 0 0 10px #00ff9f, 0 0 20px #00ff9f;
      }
    </style>
  </head>
  <body>
    <h1>Its A Draw</h1>
  </body>
  </html>
`);
    return;
}
}
function HandleClick(e){
    const id=Number(e.id);
    if(arr[id]!==null)return;
    arr[id]=CurrentPlayer;
    CheckWin()
    e.innerText=CurrentPlayer;
    CurrentPlayer=CurrentPlayer==="X"?"0":"X";
    // console.log(arr);
    
}