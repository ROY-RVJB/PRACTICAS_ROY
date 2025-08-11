const App=()=>{
  const titulo="plataforma tienda "
  const despedida=()=>{
    alert("chao oso domesticado")
  }
  return (
    <div>
      <h2>{titulo}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eum alias perspiciatis molestias atque qui sint impedit quos neque nemo odit, ipsa numquam asperiores nam aliquid inventore quod cumque? Nobis!
        </p>
        <label htmlFor="nombre">ingrese nombre:</label>
        <input id="nombre" type="text" />
        <button onClick={()=>{alert("HOLA")}}>Saludo</button>
        <button onClick={(despedida)}>Salir</button>
      
    </div>
  )
   
  
  
}

export default App;