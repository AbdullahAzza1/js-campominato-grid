let numCelle = 100;
let grid = document.getElementById("griglia");

for (let i = 1; i <= numCelle; i++) {
    
    let cella = creaQuadrato(i);
    grid.appendChild(cella);

}


function creaQuadrato(numero) {

    const cella = document.createElement("div");
    cella.classList.add("quadrati");

    
    cella.addEventListener("click", function() {

        console.log("Cella cliccata", numero);
        
        
        cella.classList.toggle("highlight");

        

    });

    return cella;
}