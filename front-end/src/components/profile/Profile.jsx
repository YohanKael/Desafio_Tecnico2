import './Profile.css';
import { useState, useEffect } from 'react';

const Profile = ({ profileData, changeUserId}) => {

  const [lefArrowEnabled, setLefArrowEnabled] = useState(false);
  const [rightArrowEnabled, setRightArrowEnabled] = useState(false);

  useEffect(() => {
    let enableRight = changeUserId(0);
    setRightArrowEnabled(enableRight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className='profile'>
      <div className={'leftArrow' + (lefArrowEnabled ? "" : " disabled")} onClick={() => {
        let enableState = changeUserId(-1);
        setLefArrowEnabled(enableState);
        setRightArrowEnabled(true);
      }}></div>
      <ProfileInfo profileData={profileData} />
      <div className={'rightArrow' + (rightArrowEnabled ? "" : " disabled")} onClick={() => {
        let enableState = changeUserId(1);
        setRightArrowEnabled(enableState);
        setLefArrowEnabled(true);
      }}></div>
    </div>
  )
}

const ProfileInfo = ({ profileData }) => {
  return (
    <div className='profileInfo'>
      <div className="profilePicture">
        <img src={"http://localhost:3100/" + profileData.avatar} alt="User Avatar"/>
      </div>
      <div className="profileName profileBolder">{profileData.name}</div>
      <div className="profileMoreInfo">
        <div className="profileItalic">{profileData.age} anos</div>
        <div className="profileItalic profileSeparator">| </div>
        <div className="profileItalic">{profileData.role} </div>
      </div>
    </div>
  )
}
export default Profile