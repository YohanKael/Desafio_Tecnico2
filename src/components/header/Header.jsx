import Infos from '../infos/Infos.jsx'
import Profile from '../profile/Profile.jsx'
import './Header.css';

const Header = ({ headerData, changeUserId}) => {
  return (
    <div className='header'>
      <Infos data={[
        ["Diretoria", headerData.manager],
        ["Desempenho", "Box " + headerData.box],
        ["Risco", headerData.risk === null ? "N/A" : headerData.risk]
      ]} />
      <Profile profileData={{
        avatar: headerData.avatar,
        name: headerData.name,
        age: headerData.age,
        role: headerData.role
      }}
        changeUserId={changeUserId}
      />
      <Infos data={[
        ["Salário", headerData.salary],
        ["PIR", headerData.pir * 100 + "%"],
        ["GF", headerData.gf]
      ]} />
    </div>
  )
}

export default Header