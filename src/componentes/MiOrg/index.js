import "./MiOrg.css"
  
const MiOrg = (props) => {

    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("mostrar/ocultar elemento")
    //     actualizarMostrar()
    // }

    return <section className="orgSection">
        <h3 className="title"> Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}
export default MiOrg