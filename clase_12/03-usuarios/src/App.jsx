import { useState,useEffect } from "react"
import axios from 'axios'
import Select from "./Select";

const App=()=>{
  const [usuarios,setUsuarios]=useState([]);
  const [pagina,setPagina]=useState(1);
  const [totalPaginas,setTotalPaginas]=useState(1);
  // const options=(num)=>{
  //   let opts =[];
  //   for(let i=1;i<=num;i++){
  //     opts.push(<option value={i} key={i}>Pagina{i}</option>)
  //   }
  //   console.log("OPTS: ",opts);
  //   return opts;
  // }
  useEffect(()=>{
    axios.get(`https://reqres.in/api/users?page=${pagina}`,{
      headers :{
        'Content-Type':'applications/json',
        'x-api-key':'reqres-free-v1'

      }
    })

    .then((respuesta)=>{
      console.log(respuesta.status)
      console.log(respuesta.data)
      console.log(respuesta.data.data)
      setUsuarios(respuesta.data.data)
      setTotalPaginas(respuesta.data.total_pages);
    })
    .catch((error)=>{
      console.log(error);
    });
    return ()=>{
      console.log("limpiando el componente")
    }
  },[pagina]);
  return (
    <div>
      <Select
      totalPaginas={totalPaginas}
      pagina={pagina}
      setPagina={setPagina}
      />
      {/* <select 
      value={pagina}
      onChange={(evento)=>{
        setPagina(+evento.target.value)
      }}>
        {options(totalPaginas)}
      </select> */}
      {usuarios.map((user)=>(
    <div key ={user.id} style={{marginBoton: "2rem"}}>
      <img src={user.avatar} alt={user.first_name} width={100} style={{borderRadius:"10%"}} />
      {user.first_name},
      {user.email}
     
    </div>
      ))}
    </div>
  )

}
export default App
