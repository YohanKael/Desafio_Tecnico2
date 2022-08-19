import Infos from '../informacoes/Informacoes.jsx'
import Profile from '../profile/Profile.jsx'
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <Infos/>
        <Profile/>
        <Infos/>
    </div>
  )
}

export default Header