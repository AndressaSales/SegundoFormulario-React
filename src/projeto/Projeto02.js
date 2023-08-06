import { useState } from "react";
function Projeto02({vetor, selecionar}){

    const [termo, setTermo] = useState('');

    return(
      <div>
        <input type="text" onChange={e => setTermo(e.target.value)} placeholder="Informe o nome" className="pesquisa form-control"/>


        <table className='table'> 
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Idade</th>
                    <th>Cidade</th>
                    <th>Selecionar</th>
                </tr>

                <tbody>
                    {
                        vetor.filter(dados => dados.nome.includes(termo)).map((dados, indice) => (
                            <tr key={indice}>
                                <td>{indice+1}</td>
                                <td>{dados.nome}</td>
                                <td>{dados.sobrenome}</td>
                                <td>{dados.idade}</td>
                                <td>{dados.cidade}</td>
                                <td><button className="btn btn-success" onClick={() => selecionar(indice)}>Selecionar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </thead>
        </table>
      </div>
    );
}
export default Projeto02;