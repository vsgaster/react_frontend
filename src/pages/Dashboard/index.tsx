import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';




interface IEventoRequest {
  nome: string;
  tipoexame: string;
  nomeexame: string;
  mesanoexame: string;
  laboratorio: string;
}

interface IEventoResponse extends IEventoRequest {
  id: string;
}

const Dashboard: React.FC = () => {
  const [nome, setNomeEvento] = useState('');
  const [tipoexame, setLocal] = useState('');
  const [nomeexame, setDiaSemana] = useState('');
  const [mesanoexame, setHorario] = useState('');
  const [laboratorio, setLike] = useState('');
  

  const [eventos, setEventos] = useState<IEventoResponse[]>([]);

  const urlAPI: string = 'http://localhost:3333';

  useEffect(() => {
    axios({
      method: 'get',
      url: `${urlAPI}/exames`
    }).then((response: AxiosResponse<IEventoResponse[]>) => {
      setEventos(response.data);
    }).catch((error: AxiosError) => {
      console.log(error);
    });
  }, []);

  function cadastrar(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const novoEvento: IEventoRequest = {
      nome,
      tipoexame,
      nomeexame,
      mesanoexame,
      laboratorio,
    }

    axios({
      method: 'post',
      url: `${urlAPI}/exames`,
      data: novoEvento
    }).then((response: AxiosResponse<IEventoResponse>) => {
      setEventos([...eventos, response.data]);
    }).catch((error: AxiosError) => {
      console.log(error);
    });
  }

  function remover(id: string): void {
    axios({
      method: 'delete',
      url: `${urlAPI}/exames/${id}`
    }).then(() => {
      setEventos(eventos.filter(e => e.id !== id));
    }).catch((error: AxiosError) => {
      console.log(error);
    });
  }

  

  return (
    <>
      <form onSubmit={cadastrar}>
        <label>Nome: </label>
        <input type='text' placeholder='Nome' required value={nome} onChange={(e: any) => { setNomeEvento(e.target.value); }} /><br></br>
        <label>Tipo de Exame: </label>
        <input type='text' list="tipodeexame" required placeholder='Tipo de Exame' value={tipoexame} onChange={(e: any) => { setLocal(e.target.value); }} />
        <br></br>
        <datalist id="tipodeexame">
          <option value="Admissional"></option>
          <option value="Periódico"></option>
          <option value="Demissional"></option>
        </datalist>
        
        <label>Nome do Exame: </label> 
        <input type='text' list="nomedoexame" required placeholder='Nome do Exame' value={nomeexame} onChange={(e: any) => { setDiaSemana(e.target.value); }} />
        <datalist id="nomedoexame">
          <option value="Hemograma Completo"></option>
          <option value="Audiometria"></option>
          <option value="Acuidade Visual"></option>
        </datalist>
        <br></br>
        <label>Data: </label>

        <input type='month' required placeholder="Data" value={mesanoexame} onChange={(e: any) => { setHorario(e.target.value); }} /><br></br>
        <label>Laboratório: </label>

        <input type='text' list="lab" required placeholder="Laboratório" value={laboratorio} onChange={(e: any) => { setLike(e.target.value); }} />
        <datalist id="lab">
          <option value="Lab Funcional"></option>
          <option value="Lab Medicina"></option>
        </datalist><br></br>
        <button type="submit">Salvar</button>
        <button><Link to={`/totais`}>Totais</Link></button>
       
        

       
      </form>

      <br /><br />

      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Tipo de Exame</td>
            <td>Nome do Exame</td>
            <td>Data</td>
            <td>Laboratório</td>
            
          </tr>
        </thead>

        <tbody>
          {
            eventos.map(e => {
              return (
                <tr key={e.id}>
                  <td>{e.nome}</td>
                  <td>{e.tipoexame}</td>
                  <td>{e.nomeexame}</td>
                  <td>{e.mesanoexame}</td>
                  <td>{e.laboratorio}</td>
                  
                
                  <td>
                    <button type='button' onClick={() => { remover(e.id); }}>
                      Remover
                    </button>
                  </td>
                
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>

  )
}

export default Dashboard



