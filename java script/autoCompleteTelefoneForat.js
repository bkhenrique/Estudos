document.addEventListener('DOMContentLoaded', function () {
    const telInput = document.getElementById('tel');

    telInput.addEventListener('input', function () {
        completarTel(telInput);
    });
    // Função para formatar o telefone
    function completarTel(input) {
        const tel = input.value.replace(/\D/g, '');
        const telFormatado = tel.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
        input.value = telFormatado;
    }
});