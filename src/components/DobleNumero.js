function DobleNumero() {
    const ejecutarDoble = (numero) => {
        let doblbe = numero * 2;
        console.log("El doble de " + numero + " es " + doble);
    }

    let mensaje = "hoy es viernes¡¡¡";
    const cambiarMensaje = () => {
        consle.log("Antes del cambio: " + mensaje);
        mensaje = "He cambiado a finde...";
        consle.log("Después del cambio: " + mensaje);
    }

    var estilo = {
        color: "red",
        backgroundColor: "yellow"
    }

    return(<div>
        <h1 style={estilo}>Métodos doble número</h1>
        <h2 style={{color: "blue"}>{mensaje}}>Métodos doble número</h2>
        <h2>{mensaje}</h2>
        <button onClick={ () => cambiarMensaje()}>Modificar Mensaje</button>

        <button onClick={ () => ejecutarDoble(5)}>Doble 5</button>
        <button onClick={ () => ejecutarDoble(10)}>Doble 10</button>
        <button onClick={ () => ejecutarDoble(20)}>Doble 20</button>
        <button onClick={ () => ejecutarDoble(30)}>Doble 30</button>
    </div>);
}

export default DobleNumero;