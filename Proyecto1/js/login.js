fetch("./modulos/indexModulo.html").then(
    function(info){
        return info.text();
    }
).then(
    function(modulo){
        console.log(modulo);
        Principal.innerHTML = modulo;
    }
)

function abrirInicio(){
    fetch("./modulos/indexModulo.html").then(
        function(info){
            return info.text();
        }
    ).then(
        function(modulo){
            console.log(modulo);
            Principal.innerHTML = modulo;
        }
    )
    
}

function abrirContacto(){
    fetch("./modulos/contactoModulo.html").then(
        function(info){
            return info.text();
        }
    ).then(
        function(modulo){
            console.log(modulo);
            Principal.innerHTML = modulo;
        }
    )
    
}

function abrirServicio(){
    fetch("./modulos/servicioModulo.html").then(
        function(info){
            return info.text();
        }
    ).then(
        function(modulo){
            console.log(modulo);
            Principal.innerHTML = modulo;
        }
    )
    
}

function abrirNosotros(){
    fetch("./modulos/nosotrosModulo.html").then(
        function(info){
            return info.text();
        }
    ).then(
        function(modulo){
            console.log(modulo);
            Principal.innerHTML = modulo;
        }
    )
    
}