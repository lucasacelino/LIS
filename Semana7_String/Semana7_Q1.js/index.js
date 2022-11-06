function criar_lista () {
    const ul = document.querySelector("ul");
    ul.style.display = "flex"
    let get_msg = document.getElementById("valor").value;
    let new_element = document.createElement("li");
    new_element.appendChild(document.createTextNode(get_msg));
    document.getElementById("gerar-lista").appendChild(new_element);
}