
const Select=(props)=>{

    console.log("PROPS",props);
    const {totalPaginas,pagina,setPagina}=props;

    const options=(num)=>{
    let opts =[];
    for(let i=1;i<=num;i++){
      opts.push(<option value={i} key={i}>Pagina{i}</option>)
    }
    console.log("OPTS: ",opts);
    return opts;
  }
  
  return(
    <>
        <h2>PAGINA:</h2>
        <select 
            value={pagina}
            onChange={(evento)=>{
                setPagina(+evento.target.value)
            }}>
                {options(totalPaginas)}
      </select>
    </>


  );
}
 export default Select