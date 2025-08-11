import axios from "axios";
axios.get("https://reqres.in/api/users?page=2")
.then((respuesta)=>console.log(respuesta.data))
.catch((error)=>console.log(error))