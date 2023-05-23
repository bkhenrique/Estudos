// Lista de estados brasileiros

const estadosBrasil = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

// Preencher select de estados

const selectState = document.getElementById("state");

for (let i = 0; i < estadosBrasil.length; i++) {
  const option = document.createElement("option");

  option.value = estadosBrasil[i];

  option.text = estadosBrasil[i];

  selectState.appendChild(option);
}

// Máscara para telefone

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", (e) => {
  e.target.value = e.target.value

    .replace(/\D/g, "")

    .replace(/^(\d{2})(\d)/g, "($1) $2")

    .replace(/(\d)(\d{4})$/, "$1-$2");
});

// Validador de CPF

function validateCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, "");

  if (cpf == "") return false;

  if (
    cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"
  )
    return false;

  let add = 0;

  for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);

  let rev = 11 - (add % 11);

  if (rev == 10 || rev == 11) rev = 0;

  if (rev != parseInt(cpf.charAt(9))) return false;

  add = 0;

  for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);

  rev = 11 - (add % 11);

  if (rev == 10 || rev == 11) rev = 0;

  if (rev != parseInt(cpf.charAt(10))) return false;

  return true;
}

// Verificar idade

function calculateAge(birthdate) {
  const birthdateDate = new Date(birthdate);

  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthdateDate.getFullYear();

  const m = currentDate.getMonth() - birthdateDate.getMonth();

  if (m < 0 || (m === 0 && currentDate.getDate() < birthdateDate.getDate())) {
    age--;
  }

  return age;
}

// Adicionando validações no formulário

const form = document.getElementById("registration-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validar CPF

  const cpf = document.getElementById("cpf");

  const cpfError = document.getElementById("cpf-error");

  if (!validateCPF(cpf.value)) {
    cpfError.textContent = "CPF inválido!";

    return;
  } else {
    cpfError.textContent = "";
  }

  // Validar idade

  const birthdate = document.getElementById("birthdate");

  const birthdateError = document.getElementById("birthdate-error");

  const age = calculateAge(birthdate.value);

  if (age < 18) {
    birthdateError.textContent =
      "Você deve ter pelo menos 18 anos para se inscrever.";

    return;
  } else {
    birthdateError.textContent = "";
  }

  // Validar e-mail

  const email = document.getElementById("email");

  const emailError = document.getElementById("email-error");

  const emailPattern = /^\S+@\S+\.\S+$/;

  if (!emailPattern.test(email.value)) {
    emailError.textContent = "Por favor, insira um e-mail válido.";

    return;
  } else {
    emailError.textContent = "";
  }

  // Se tudo estiver ok, prosseguir com a inscrição (aqui você pode implementar a lógica de envio dos dados)

  console.log("Formulário enviado com sucesso!");
});
