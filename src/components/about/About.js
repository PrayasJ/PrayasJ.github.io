import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()
    const lastName = info.lastName.toLowerCase()
    document.title = "About Me"
    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{lastName} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{lastName} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map(proficiency => <li>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map(skill => <li>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{lastName} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map(hobby => (
                    <li><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    function educationText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{lastName} $</span> cd education</p>
            <p><span style={{color: info.baseColor}}>education <span
                className={Style.green}>(main)</span> $</span> tree</p>
            <ul>
                {info.education.map(ed => (
                    <li><Box className={Style.green} component={'span'} mr={'1rem'}>{ed.title}</Box>
                    <ul style={{lineHeight: '0rem'}}>
                        <li>│</li>
                        <li> ├── <span className={Style.green}>{ed.place}</span></li>
                        <li>│</li>
                        <li> ├── Completion: {ed.completion}</li>
                        <li>│</li>
                        <li> └── Grade: {ed.grade}</li>
                    </ul>
                    </li>
                ))}
            </ul>
        </>
    }

    function experienceText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{lastName} $</span> cd experience</p>
            <p><span style={{color: info.baseColor}}>experience <span
                className={Style.green}>(main)</span> $</span> tree</p>
            <ul>
                {info.experience.map(exp => (
                    <li><Box className={Style.green} component={'span'} mr={'1rem'}>{exp.title}</Box>
                    <ul style={{lineHeight: '0rem'}}>
                        <li>│</li>
                        <li> ├── <span className={Style.green}>{exp.place}</span></li>
                        <li>│</li>
                        <li> ├── {exp.duration}</li>
                        <li>│</li>
                        <li> └── description: <Box paddingLeft={'4rem'} paddingTop={'1rem'} style={{lineHeight: '2rem'}}>{exp.desc}</Box></li>
                    </ul>
                    </li>
                ))}
            </ul>
        </>
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal isBlog={true} text={aboutMeText()}/>
            <Terminal isBlog={true} text={experienceText()}/>
            <Terminal isBlog={true} text={skillsText()}/>
            <Terminal isBlog={true} text={educationText()}/>
            <Terminal  isBlog={true} text={miscText()}/>
        </Box>
    )
}