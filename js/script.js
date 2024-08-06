console.log("Vamo Bora")


let nomes = ["Guilherme", "Francisco", "Joelma", "Sueli"];



function addNomes(){
    let listaNomes = document.getElementById("lista-nomes");
    listaNomes.innerHTML = "";
    for (let nome of nomes){
        let item = document.createElement("li");
        item.textContent = nome;
        listaNomes.appendChild(item);
    }
}


document.getElementById("ordNome").addEventListener("click", () =>{
    nomes.sort();
    addNomes();
})

document.getElementById("revNome").addEventListener("click", () =>{
    nomes.reverse();
    addNomes();
})

nomes.push("Beatriz");

document.getElementById("btnAddNomes").addEventListener("click", addNomes);

