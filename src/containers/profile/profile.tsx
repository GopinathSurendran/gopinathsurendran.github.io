import classes from './profile.module.scss';
import ProfileImage from '../../assets/images/profile.png';

const Profile = () => {
    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-8">
                    <div className="gs-section">
                        <h2 className="gs-header">Profile</h2>
                        <h5 className="gs-subHeader">I'm a Front End Web Developer</h5>
                    </div>
                    <div className={"container"}>
                        <div className="row mb-5">
                            <div className="col-md-4">
                                <div className="gs-subSection">
                                    <h4 className="gs-header">About me</h4>
                                    <div>
                                        Skilled Front End Web Developer, specializing in React JS, Angular, and HTML/CSS.
                                        Excellent problem-solving and communication skills.
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
                                        <div className={classes.field}>
                                            <div className={classes.label}>Name:</div>
                                            <div className={classes.value}>Gopinath Surendran</div>
                                        </div>
                                        <div className={classes.field}>
                                            <div className={classes.label}>Age:</div>
                                            <div className={classes.value}>{new Date('nov-15-1992').gsToDateString(true, true)}</div>
                                        </div>
                                        <div className={classes.field}>
                                            <div className={classes.label}>Location:</div>
                                            <div className={classes.value}>Toronto, Canada</div>
                                        </div>
                                        <div className={classes.field}>
                                            <div className={classes.label}>Email:</div>
                                            <div className={classes.value}><a href='mailTo:sgopinath.sms@gmail.com'>sgopinath.sms@gmail.com</a></div>
                                        </div>
                                        <div className={classes.field}>
                                            <div className={classes.label}>Phone:</div>
                                            <div className={classes.value}>+1-647-967-7143</div>
                                        </div>
                                        <div className={classes.field}>
                                            <div className={classes.label}><a href="https://www.linkedin.com/in/gopinathsurendran/" target="_blank">LinkedIn</a></div>
                                        </div>
                                        <div className={classes.field}>
                                            <div className={classes.label}><a href="https://github.com/GopinathSurendran" target="_blank">GitHub</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2" />
            </div>
        </div>
    )
}

export default Profile;