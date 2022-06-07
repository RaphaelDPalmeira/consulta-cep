const cepEl = document.getElementById("cep");

const showData = (result) => {
    const message = document.getElementById("erro")

    if(result.cep == undefined || result.cep == null){
        message.innerText = "Informe um CEP válido"
    }
    else {
        message.innerText = ""
        for(const campo in result){
            if(document.getElementById(""+campo)){
                document.getElementById(""+campo).value = result[campo]
            }
        }
    }

}

cepEl.addEventListener("change", () => {

    let cep = cepEl.value.replace("-","");

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
    .then((response) => {response.json()
        .then((data) => showData(data))
    })
    .catch((e) => {
        console.log("Erro: "+e.message)
    })
})