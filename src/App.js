// hooks
import { useState } from 'react'; 

import './App.css';
// importando a página do projeto
import Projeto01 from './projeto/projeto01';
import Projeto02 from './projeto/Projeto02';

function App() {

  // useState
  const [ indiceVetor, setIndiciVetor] = useState('');
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [vetor, setVetor] = useState([]);

// função para cadastrar
const cadastrar = () => {
  let dados =  {'nome':nome, 'sobrenome':sobrenome, 'idade':idade, 'cidade':cidade}
  setVetor([...vetor, dados]);

  setNome('');
  setSobrenome('');
  setIdade('');
  setCidade('');
}
// função para selecionar o usuário
const selecionar = (indice) => {
  setIndiciVetor(indice);
  setNome([indice].nome);


  setSobrenome([indice].sobrenome);
  setIdade([indice].idade);
  setCidade([indice].cidade);

  setBtnCadastrar(false);
}
// função para alterar os dados
const alterar = () => {
  let dados = {'nome':nome, 'sobrenome':sobrenome, 'idade':idade, 'cidade':cidade}

  let copiaVetor = [...vetor];
  copiaVetor[indiceVetor] = dados;
  setVetor(copiaVetor);

  setNome('');
  setSobrenome('');
  setIdade('');
  setCidade('');
  setBtnCadastrar(true);
}
// função para remover
const remover = () => {
  let copiaVetor = [...vetor];
  copiaVetor.splice(indiceVetor, 1);

  setNome('');
  setSobrenome('');
  setIdade('');
  setCidade('');
  setBtnCadastrar(true);
}
// funçaõ para cancelar a edição ou remoção
const cancelar = () => {
  setNome('');
  setSobrenome('');
  setIdade('');
  setCidade('');

  setBtnCadastrar(true);
}

  return (
    <div>
      <Projeto01 btnCadastrar={btnCadastrar} alterar={alterar} remover={remover} cancelar={cancelar} setNome={setNome} setSobrenome={setSobrenome} setIdade={setIdade} setCidade={setCidade} cadastrar={cadastrar} nome={nome} sobrenome={sobrenome} idade={idade} cidade={cidade}/>
      <Projeto02 vetor={vetor} selecionar={selecionar} />
    </div>
  );
}

export default App;
