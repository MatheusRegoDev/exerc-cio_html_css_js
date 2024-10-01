const form = document.getElementById('form-compara-numero');

function isBMaior(numeroA, numeroB){

    return numeroB > numeroA;
}
form.addEventListener('submit', function(e){
    let formValido = false
    e.preventDefault();



    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');
    let mensagem = `Válidação com sucesso: O <b>${numeroB.value}</b> é maior que o <b>${numeroA.value}</b>`


    formValido = isBMaior(Number(numeroA.value), Number(numeroB.value));
    const containerMessagemSucesso = document.querySelector('.success-message');
    const containerMessagemError = document.querySelector('.error-message');
    if (formValido) {
        
        containerMessagemSucesso.innerHTML = mensagem;
        containerMessagemSucesso.style.display = 'block';
        containerMessagemError.style.display = 'none';

        alert('Válidação com sucesso!')
        numeroA.value = '';
        numeroB.value = '';
    }
    else
    {
        mensagem = `Válidação com Error: O <b>${numeroA.value}</b> é maior que o <b>${numeroB.value}</b>`
        containerMessagemError.innerHTML = mensagem;
        containerMessagemError.style.display = 'block';
        containerMessagemSucesso.style.display = 'none';
        
        alert('Erro ná validação')
    }


})
