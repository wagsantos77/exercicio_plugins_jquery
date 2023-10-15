$(document).ready(function(){
    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00.000-000')

    $('#telefone').mask('(00) 0000-0000')

    $('form').validate({
      rules: {
        nome: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        telefone: {
          required: true
        },
        cpf: {
          required: true,
          cpf: true
        },
        cep: {
          required: true,
          cep: true
        }
      },
      messages: {
        nome: 'Por favor, insira o seu nome'
      },
      submitHandler: function(form) {
        console.log(form)
      },
      invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if(camposIncorretos) {
          alert(`Existem ${camposIncorretos} campos incorretos`)
        }
      }
})
})