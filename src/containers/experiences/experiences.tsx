import * as React from 'react';
import classes from './experiences.module.scss';

const educations = [
    {
        title: 'N.M.A.M.I.T',
        name: 'Bachelor - Mechanical Engineering',
        duration: 'Aug 2010 - May 2014',
        description: 'I was a day scholar at NMAMIT (Nitte Mahalinga Adyanthaya Memorial Institute of Technolog). Nitte college was autonomous during my studies. I have a total CGPA of 9.47 out of 10.',
        location: 'Nitte, Karkala, Karnataka, India',
        link: ''
    },
    {
        title: 'Canara College',
        name: 'PUC - Pre University Courses',
        duration: 'Jun 2008 - April 2010',
        description: 'The main subjects that I studied are Physics, Chemistry, Maths and Computer Science. My overall percentage in PUC is 85%',
        location: 'Kodailbail, Mangalore, Karnataka, India',
        link: ''
    }
];

const careers = [
    {
        title: 'Infosys Limited',
        name: 'Technology Analyst',
        duration: 'Jun 2014 - current',
        description: 'Over the years I worked with different roles, starting from Systems Engineer trainee, Systems Engineer, Senior Systems Engineer. Currently working as Technology Analyst. I work for a client called PwC. The domain is auditing. I have worked on 5 different projects in agile methodology involving technologies like Angular, .Net MVC framework, SQL. Currently I work with team of 10 plus members and the technologies are React JS, .NET web api, .NET core, SQL, SASS, LINQ',
        location: 'Mangalore, India. & Toronto, Canada',
        link: ''
    },
]

const Experiences = () => {
    const renderItems = (items) => {
        return items.map(item => {
            return (
                <div className="row mb-5">
                    <div className="col-4">
                        <div className={classes.itemTitle}>{item.title}</div>
                        <div className={classes.itemDuration}>{item.duration}</div>
                    </div>
                    <div className="col-8">
                        <div className={classes.itemName}>{item.name}</div>
                        <div className={classes.itemDescription}>{item.description}</div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className={`${classes.container}`}>
            <div className="container">
                <div className={`row`}>
                    <div className="col-lg-2" />
                    <div className="col-lg-8">
                        <div className="gs-section">
                            <h2 className="gs-header">Experiences</h2>
                            <h5 className="gs-subHeader">I have a total of {new Date('jun-09-2014').gsToDateString(true)} of professional experience.</h5>
                        </div>
                        <div className={"container"}>
                            <div className="row">
                                <div className="gs-subSection">
                                    <h4 className="gs-header">Educations</h4>
                                </div>
                            </div>
                            {renderItems(educations)}
                            <div className="border"></div>
                            <div className="gs-subSection">
                                <h4 className="gs-header">Careers</h4>
                            </div>
                            {renderItems(careers)}
                        </div>
                    </div>
                    <div className="col-lg-2" />
                </div>
            </div>
        </div>
    )
}

export default Experiences;