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
  const [TotalLabFuncional, setLabFuncional] = useState(0);
  const [TotalLabMedicina, setLabMedicina] = useState(0);
  const [TotalExAdmi, setExAdi] = useState(0);
  const [TotalExPeri, setExPeri] = useState(0);
  const [TotalExDemi, setExDemi] = useState(0);
  const [TotalTExHemoC, setTExHemoC] = useState(0);
  const [TotalAudiometria, setTotalAudiometria] = useState(0);
  const [TotalAcuidadeVisual, setAcuidadeVisual] = useState(0);
  const [laboratorio, setLike] = useState('');
  

  const [eventos, setEventos] = useState<IEventoResponse[]>([]);

  const urlAPI: string = 'http://localhost:3333';

  useEffect(() => {
    axios({
      method: 'get',
      url: `${urlAPI}/exames`
    }).then((response: AxiosResponse<IEventoResponse[]>) => {
      setAcuidadeVisual(response.data.filter(x=>x.nomeexame === 'Acuidade Visual').length)
      setTotalAudiometria(response.data.filter(x=>x.nomeexame === 'Audiometria').length)
      setTExHemoC(response.data.filter(x=>x.nomeexame === 'Hemograma Completo').length)
      setExDemi(response.data.filter(x=>x.tipoexame === 'Demissional').length)
      setExPeri(response.data.filter(x=>x.tipoexame === 'Periódico').length)
      setExAdi(response.data.filter(x=>x.tipoexame === 'Admissional').length)
      setLabMedicina(response.data.filter(x=>x.laboratorio === 'Lab Medicina').length)
      setLabFuncional(response.data.filter(x=>x.laboratorio === 'Lab Funcional').length)
      setEventos(response.data);
    }).catch((error: AxiosError) => {
      console.log(error);
    });
  }, []);

  document.addEventListener("DOMContentLoaded",function(){
    console.log("teste")
    
  })
 



  
  

  return (
    <>
      

      <br /><br />

      <table>
        <thead>
          <tr>
            <td>Lab Funcional</td>
            <td>Lab Medicina</td>
            <td>Admissional</td>
            <td>Periodico</td>
            <td>Demissional</td>
            <td>Hemograma Completo</td>
            <td>Audiometria</td>
            <td>Acuidade</td>
            
          </tr>
        </thead>

        <tbody>
          <tr>
        <td>{TotalLabFuncional}</td>
        <td>{TotalLabMedicina}</td>
        <td>{TotalExAdmi}</td>
        <td>{TotalExPeri}</td>
        <td>{TotalExDemi}</td>
        <td>{TotalTExHemoC}</td>
        <td>{TotalAudiometria}</td>
        <td>{TotalAcuidadeVisual}</td>
        </tr>
        </tbody>
      </table>
    </>

  )
}

export default Dashboard



