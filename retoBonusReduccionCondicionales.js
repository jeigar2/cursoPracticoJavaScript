function tipoSuscripcion (tipo, texto) {
    this.tipo = tipo;
    this.texto = texto;
}

var tiposSuscripciones = [ 
    new tipoSuscripcion("Free","Solo puedes tomar los cursos gratis"), 
    new tipoSuscripcion("Basic","Puedes tomar casi todos los cursos de Platzi durante un mes"),
    new tipoSuscripcion("Expert","Puedes tomar casi todos los cursos de Platzi durante un año"),
    new tipoSuscripcion("ExpertPlus","Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
]
function buscaTipoSuscripcion(suscripcion){
    let tipoResultado = tiposSuscripciones.find(tipoSuscripcion => tipoSuscripcion.tipo === suscripcion);
    if (tipoResultado) 
        return tipoResultado.texto
    return "No existe este tipo de suscripcion";
}
console.log(buscaTipoSuscripcion("Free"));
console.log(buscaTipoSuscripcion("Basic"));
console.log(buscaTipoSuscripcion("Expert"));
console.log(buscaTipoSuscripcion("ExpertPlus"));
console.log(buscaTipoSuscripcion("lalal"));