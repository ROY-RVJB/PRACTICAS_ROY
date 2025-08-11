import { obtenerUsuario } from "./service.js";
const main = async()=>{
    try {
      const usuarios=await obtenerUsuario();
    console.log(usuarios.data);
    dibujarUsuarios(usuarios.data);  
    } catch (error) {
        console.log(error);

    }
}

const Card=(usuario)=>{
    const{first_name,last_name,email}=usuario;
    const div=document.createElement('div');
    div.innerHTML=`
    <div>
    <p>nombre: ${first_name}<p/>
    <p>apellido: ${last_name}<p/>
    <p>email: ${email}<p/>
    <div/>
    `
    return div;
};
const dibujarUsuarios=(usuarios)=>{
    const divRoot=document.getElementById('root')
    usuarios.forEach((user) => {
        const newCard=Card(user);
        divRoot.appendChild(newCard);
        
    });
}
main();
