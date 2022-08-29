import './App.css';
import TimeLine from './components/timeline/Timeline.jsx';
import Header from './components/header/Header.jsx';
import Tables from './components/tables/Tables.jsx';
import {useState, useEffect} from 'react';

const URL = "http://localhost:3100/users/";

function App() {
  const [currentUserData, setCurrentUserData] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(1);

  useEffect(() => {
    fetch(URL + currentUserId)
      .then((response) => response.json())
      .then((data) => {
        setCurrentUserData(data);
      })
      .catch((e) => {
        console.log("Usuário com id = " + currentUserId + " não encontrado.")
      });
  }, [currentUserId]);

  const changeUserId = (value) => {
    setCurrentUserId(currentUserId + value);
  }

  return (
    <div className='App'>
      {!currentUserData ? 
      <>Loading...</> :
      <>
        <Header headerData={{
          name: currentUserData.nome,
          age: getAge(currentUserData.dataNascimento),
          role: currentUserData.cargo,
          avatar: currentUserData.avatar,
          manager: currentUserData.diretoria,
          box: currentUserData.box,
          risk: null,
          salary: currentUserData.remuneracao.salario,
          pir: currentUserData.remuneracao.pir,
          gf: currentUserData.remuneracao.gf
        }}
        changeUserId={changeUserId}/>
        <TimeLine timelineData={currentUserData.progressao}/>
        <Tables leftData={{
          box: currentUserData.box,
          sucessor: currentUserData.sucessor,
          talento: currentUserData.talento,
          diretoria: currentUserData.diretoria,
          area: currentUserData.area,
          subArea: currentUserData.subArea,
          cargo: currentUserData.cargo,
          posicao: currentUserData.posicao,
          gestorImediato: currentUserData.gestorImediato,
          tempoNoCargo: getAge(currentUserData.dataInicioCargo),
          tempoNaArea: getAge(currentUserData.dataInicioArea),
          elegibilidadePromocao: currentUserData.elegibilidadePromocao
        }}
        rightData={{
          salario: currentUserData.remuneracao.salario,
          remuneracaoTotal: currentUserData.remuneracao.remuneracaoTotal,
          gf: currentUserData.remuneracao.gf,
          nv: currentUserData.remuneracao.nv,
          pir: currentUserData.remuneracao.pir,
          tempoSemAumento: new Date().getMonth() - new Date(currentUserData.remuneracao.dataUltimoAumento).getMonth(),
          percentualUltimoAumento: currentUserData.remuneracao.percentualUltimoAumento,
          premio: currentUserData.remuneracao.premio,
          bonusPlr: currentUserData.remuneracao.bonusPlr,
          adicionais: currentUserData.remuneracao.adicionais
        }}/>
      </>
    }
    </div>
  )
}

function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

export default App;
