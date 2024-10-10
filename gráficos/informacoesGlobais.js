const ur = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoeGlobais(){
const res = await fetch(url)
const dados = await res.json()
console.log(dados); 
const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-container__texto')
paragrafo.innerHTML = 'voce sabia que o mundo tem $(dados.total_pessoa_conectadas) e estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.'

const container = document.getElementById ('grafico-container')
container.appendChild(paragrafo)
}

visualizarInformacoeGlobais()