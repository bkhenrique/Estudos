// aqui ele vai escutar a DOM ou seja o documento todo html para cpf
document.addEventListener('DOMContentLoaded', function () {
    const cpfInput = document.getElementById('cpf');

    cpfInput.addEventListener('input', function () {
        completarCpf(cpfInput);
    });
    // Função para formatar o CPF
    function completarCpf(input) {
        const cpf = input.value.replace(/\D/g, '');
        const cpfFormatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        input.value = cpfFormatado;
    }
});