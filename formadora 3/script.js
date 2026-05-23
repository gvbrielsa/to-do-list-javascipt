function adicionarTarefa() {
    let valorInput = document.querySelector('input').value.trim();

    if (valorInput === "") {
        alert("Digite uma nota!");
        return;
    }

    let li = document.createElement('li');
    li.innerHTML = valorInput + ' <span onclick="deletarTarefa(this)">❌</span>';

    document.querySelector('ul').appendChild(li);

    document.querySelector('input').value = '';
}

function deletarTarefa(botao) {
    botao.parentElement.remove();
}