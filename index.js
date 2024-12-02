const Parse = require('parse/node');
Parse.serverURL = 'https://parseapi.back4app.com/';

async function retornaEndereco() {
    Parse.initialize("AI715rkoeft72UsyNX5AUqxiAdqWVdV01l8gKZDy", "XH0vgQM0nWrSoOcB0U9VYeQI6lL86OtIaD2P0p2C");

    const CEPs = Parse.Object.extend("Cepcorreios_CEP");
    const query = new Parse.Query(CEPs);
    query.equalTo("CEP", "99980974");

    const results = await query.find();

    console.log(`Encontrado(s) ${results.length} resultado(s) para o CEP.`);

    for (let i = 0; i < results.length; i++) {
        let cep = results[i].get('CEP');
        let logradouro = results[i].get('logradouro');
        let bairro = results[i].get('bairro');
        let cidade = results[i].get('cidade');
        let estado = results[i].get('estado');

        console.log(`\tO logradouro para o CEP ${cep} é: ${logradouro}`);
        console.log(`\tO bairro para o CEP ${cep} é: ${bairro}`);
        console.log(`\tA cidade para o CEP ${cep} é: ${cidade}`);
        console.log(`\tO estado para o CEP ${cep} é: ${estado}`);
    }
}

retornaEndereco();
