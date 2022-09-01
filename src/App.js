import './App.css';
import TimeLine from './components/timeline/Timeline.jsx';
import Header from './components/header/Header.jsx';
import Tables from './components/tables/Tables.jsx';
import {useState, useEffect} from 'react';

const URL = "http://localhost:3100/users";

function App() {
  const [currentUserData, setCurrentUserData] = useState(null);
  const [headerData, setHeaderData] = useState(null)
  const [leftData, setLeftData] = useState(null)
  const [rightData, setRightData] = useState(null)
  const [timelineData, setTimelineData] = useState(null)
  const [currentUserId, setCurrentUserId] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);

  // Get total users count
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        let totalUsers = Object.keys(data).length;
        setTotalUsers(totalUsers);
      })
      .catch((e) => {
        console.log("Não foi possível obter a lista de usuários", e);
      });
  }, []);

  // Get user data
  useEffect(() => {
    fetch(`${URL}/${currentUserId}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentUserData(data);
        setHeaderData({
          name: data.nome,
          age: getAge(data.dataNascimento),
          role: data.cargo,
          avatar: data.avatar,
          manager: data.diretoria,
          box: data.box,
          risk: null,
          salary: data.remuneracao.salario,
          pir: data.remuneracao.pir,
          gf: data.remuneracao.gf
        })
        setTimelineData(data.progressao)
        setLeftData({
          box: data.box,
          sucessor: data.sucessor,
          talento: data.talento,
          diretoria: data.diretoria,
          area: data.area,
          subArea: data.subArea,
          cargo: data.cargo,
          posicao: data.posicao,
          gestorImediato: data.gestorImediato,
          tempoNoCargo: getAge(data.dataInicioCargo),
          tempoNaArea: getAge(data.dataInicioArea),
          elegibilidadePromocao: data.elegibilidadePromocao
        })
        setRightData({
          salario: data.remuneracao.salario,
          remuneracaoTotal: data.remuneracao.remuneracaoTotal,
          gf: data.remuneracao.gf,
          nv: data.remuneracao.nv,
          pir: data.remuneracao.pir*100 + "%",
          tempoSemAumento: new Date().getMonth() - new Date(data.remuneracao.dataUltimoAumento).getMonth(),
          percentualUltimoAumento: data.remuneracao.percentualUltimoAumento,
          premio: data.remuneracao.premio,
          bonusPlr: data.remuneracao.bonusPlr,
          adicionais: data.remuneracao.adicionais
        })
      })
      .catch((e) => {
        console.log("Usuário com id = " + currentUserId + " não encontrado.")
      });
  }, [currentUserId, totalUsers]);

  const changeUserId = (value) => {
    if (value === 0) {
      return totalUsers > 1;
    }

    if (currentUserId < totalUsers && value > 0) {
      let updatedCurrentUserId = currentUserId + value;
      setCurrentUserId(updatedCurrentUserId);
      if (updatedCurrentUserId === totalUsers) 
        return false;
      return true;
    }
    else if (currentUserId > 1 && value < 0) {
      let updatedCurrentUserId = currentUserId + value;
      setCurrentUserId(updatedCurrentUserId);
      if (updatedCurrentUserId === 1)
        return false;
      return true;
    }
    else return false;
  }

  return (
    <div className='App'>
      {!currentUserData ? 
      <>Loading...</> :
      <>
        <Header headerData={headerData}
        changeUserId={changeUserId}/>
        <TimeLine timelineData={timelineData}/>
        <Tables leftData={leftData}
        rightData={rightData}/>
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
