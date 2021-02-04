import * as React from 'react';
import classes from './profile.module.scss';
import ProfileImage from '../../assets/images/profile.png';

const Profile = () => {
    return (
        <div>
            <div className="gs-section">
                <h2 className="gs-header">Profile</h2>
                <h5 className="gs-subHeader">I'm a full stack developer</h5>
            </div>
            <div className={"container"}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="gs-subSection">
                            <h4 className="gs-header">About me</h4>
                            <div>
                                I am a full stack developer with 6+ years of experience.
                                I have good knowledge in front-end techniques.
                                I am currently working for Infosys limited. I am fron Tamilnadu, India.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={classes.profileImage}>
                            <img src={ProfileImage} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="gs-subSection">
                            <h4 className="gs-header">Details</h4>
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
            </div>
        </div>
    )
}

export default Profile;