import './Profile.css';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='arrow'>{"<"}</div>
      <ProfileInfo/>
      <div className='arrow'>{">"}</div>
    </div>
  )
}

const ProfileInfo = (props) => {
  return (
    <div className='profileInfo'>
      <div className="profilePicture">FOTO</div>
      <div className="profileName">NOME</div>
      <div className="profileMoreInfo">IDADE | CARGO</div>
    </div>
    )
}
export default Profile