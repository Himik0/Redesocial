const ur = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoeGlobais(){
const res = await fetch(url)
const dados = await res.json()
console.log(dados); 
const paragrafo = document.createElement('p')
}

visualizarInformacoeGlobais()