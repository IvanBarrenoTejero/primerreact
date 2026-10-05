function Metodos() {
    const mostrarmensaje = () => {
        console.log("Mostrando mensaje");
    }
    return (<div>
        <h2>Ejemplo de métodos React</h2>
        {mostrarmensaje()}
        <button onClick={ () => mostrarmensaje()}>Pulsar...</button>
    </div>)
}
export default Metodos;