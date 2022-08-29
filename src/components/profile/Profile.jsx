import './Profile.css';

const Profile = ({profileData, changeUserId}) => {
  console.log("changeUserId", changeUserId);
  return (
    <div className='profile'>
      <div className='arrow' onClick={() => changeUserId(-1)}>{"<"}</div>
      <ProfileInfo profileData={profileData}/>
      <div className='arrow' onClick={() => changeUserId(1)}>{">"}</div>
    </div>
  )
}

const ProfileInfo = ({profileData}) => {
  return (
    <div className='profileInfo'>
      <div className="profilePicture">
        <img src={"http://localhost:3100/" + profileData.avatar}/>
      </div>
      <div className="profileName">{profileData.name}</div>
      <div className="profileMoreInfo">{profileData.age} | {profileData.role} </div>
    </div>
    )
}
export default Profile