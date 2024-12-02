Parse.initialize("AI715rkoeft72UsyNX5AUqxiAdqWVdV01l8gKZDy", "XH0vgQM0nWrSoOcB0U9VYeQI6lL86OtIaD2P0p2C");
Parse.serverURL = 'https://parseapi.back4app.com/';

async function buscaCep() {
    let cepDigitado = document.getElementById("cepsearch").value;
    let cepConsulta = cepDigitado.replace(/\D/g, '');

    const Cep = Parse.Object.extend("Cepcorreios_CEP");
    const query = new Parse.Query(Cep);
    query.equalTo("CEP", cepConsulta);
    const results = await query.first();

    if (results) {
        let logradouro = results.get('logradouro');
        let bairro = results.get('bairro');
        let cidade = results.get('cidade');
        let estado = results.get('estado');

        let resultado = `Endereço encontrado:\nLogradouro: ${logradouro}\nBairro: ${bairro}\nCidade: ${cidade}\nEstado: ${estado}`;
        console.log(resultado);
        alert(resultado);
    } else {
        alert("SEM RESULTADO PARA O CEP");
    }
}
