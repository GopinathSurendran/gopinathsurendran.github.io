import * as React from 'react';
import classes from './profile.module.scss';
import ProfileImage from '../../assets/images/profile.png';

const Profile = () => {
    return (
        <div>
            <div className="section">
                <div className="header">Profile</div>
                <div className="subHeader">I'm a full stack developer</div>
            </div>
            <div className={classes.container}>
                <div className="subSection">
                    <div className="header">About me</div>
                    <div>
                        I am a full stack developer with 6+ years of experience. I have good knowledge in front-end techniques. I am currently working for Infosys limited. I am fron Tamilnadu, India.
                </div>
                </div>
                <div className={classes.profileImage}>
                    <img src={ProfileImage} />
                </div>
                <div className="subSection">
                    <div className="header">Details</div>
                    <div>
                        <div className={classes.label}>Name:</div>
                        <div>Gopinath Surendran</div>
                        <div className={classes.label}>Age:</div>
                        <div>28 years</div>
                        <div className={classes.label}>Location:</div>
                        <div>Toronto, Canada</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;