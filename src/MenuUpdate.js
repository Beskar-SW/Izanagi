import React,{useState, useEffect} from "react";

export default function MenuUpdate() {

    const urlStatics = 'http://localhost:5000/static/';
    const [entradas, setEntradas] = useState(null);
    const [empanizados, setEmpanizados] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:5000/Menu/1')
        .then(res => res.json())
        .then(data => {
            setEntradas(data);
        })
    }, []);
    

    return(
        <>
            <div style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',paddingTop:20}}>
                <h1>Menu</h1>
                {console.log(entradas)}
            </div>
            <div style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',paddingTop:20}}>
                {entradas.forEach(entrada => {
                return (
                    <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',paddingTop:20}}>
                    <img src={urlStatics + entrada.rutaFoto} alt=""/>
                    <h3>{entrada.producto}</h3>
                    <h4>{entrada.precio}</h4>
                    </div>
                )
                })}
            </div>
            <div style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',paddingTop:20}}>
                <h1>Empanizados</h1>
            </div>
            <div style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',paddingTop:20}}>
                {empanizados.forEach(empanizado => {
                return (
                    <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',paddingTop:20}}>
                    <img src={urlStatics + empanizado.rutaFoto} alt=""/>
                    <input type={"text"} onChange={empanizado.producto} value={empanizado.producto}></input>
                    <h4>{empanizado.precio}</h4>
                    <p>{empanizado.descripcion}</p>
                    </div>
                )})}
            </div>
            <button onClick={()=>console.log("Hola")}>prueba</button>
        </>
    );
}