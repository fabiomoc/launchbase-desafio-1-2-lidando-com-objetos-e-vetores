/* EMPRESA */
const usuario = {
  'nome': 'Diego',
  'empresa': {
    'nome': 'Rockeseat',
    'cor': 'Roxo',
    'foco': 'Programação',
    'endereco': {
      'rua': 'Rua Guilherme Gembala',
      'numero': 260
    }
  }
}

console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`)

/* PROGRAMADOR */
const programador = {
  'nome': 'Carlos',
  'idade': 35,
  'tecnologias': [
    { 'nome': 'C++', 'especialidade': 'Desktop' },
    { 'nome': 'Python', 'especialidade': 'Data Science' },
    { 'nome': 'JavaScript', 'especialidade': 'Web/Mobile' },
  ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)