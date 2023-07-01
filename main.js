const form = document.getElementById('form-listcontact');

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLinhas();
    updateTable();
});

function addLinhas() {
    const inputNomeContact = document.getElementById('nome-contact');
    const inputNumeroContact = document.getElementById('numero-contact');

    let linha = '<tr>';
    linha += `<td>${inputNomeContact.value}</td>`;
    linha += `<td>${inputNumeroContact.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeContact.value = '';
    inputNumeroContact.value = '';
}

    function updateTable() {
        const corpoTable = document.querySelector('tbody');
        corpoTable.innerHTML = linhas;
    }