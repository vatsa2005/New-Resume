import React from "react";
import "./styles/home.css";
import { TypeAnimation } from 'react-type-animation';
function Home() {
    const resumeIntro = "Hi my name is Srivatsa aka Vatsa. I'm currently pursuing B.Tech CSE in SRM and I know Full stack web development(FSD). This website is developed in React. Read more about me in here.";
    const sectionTitles = ["My Skills: ", "My hobbies: ", "Projects: ", "Contact: "];
    const mySkills = ["HTML(Hyper Text Markup Language)", "CSS(Cascading Style Sheets)", "JavaScirpt", "React(A framework of JavaScirpt)", "Node", "Express", "Python"];
    const hobbies = ["Programming", "Web development", "Game development", "Playing Violin", "Playing Cricket"];
    const contact = {github: "https://github.com/vatsa2005", insta: "its_me_vatsa"}
    return (
        <div className="home">
            <div className="intro">
                <div className="content">
                    {/* <p>Hi my name is Srivatsa aka Vatsa. I'm currently pursuing B.Tech CSE in SRM and I know Full stack web development(FSD). Read more about me in here.</p> */}
                    <TypeAnimation sequence={[resumeIntro]} />
                </div>
            </div>
            <div className="skills">
                <TypeAnimation sequence={[sectionTitles[0]]} cursor={false} />
                <ul>
                    {mySkills.map((val) => {
                        return <li>{<TypeAnimation sequence={[val]} cursor={false} />}</li>
                    })}
                </ul>
            </div>
            <div className="hobbies">
                <p>{sectionTitles[1]}</p>
                <ul>
                    {hobbies.map((val) => {
                        return <li><TypeAnimation sequence={[val]} cursor={false} /></li>
                    })}
                </ul>
            </div>
            <div className="projects">
                <p>{sectionTitles[2]}</p>
                <ul>
                    <li><TypeAnimation sequence={["Old Resume: "]} cursor={false} /> <a href="https://github.com/vatsa2005/Old-Resume.git"><TypeAnimation sequence={["https://github.com/vatsa2005/Old-Resume.git"]} cursor={false} /></a></li>
                    <li><TypeAnimation sequence={["Drum Roll: "]} cursor={false} /><a href="https://github.com/vatsa2005/drum-kit.git"><TypeAnimation sequence={["https://github.com/vatsa2005/drum-kit.git"]} cursor={false} /></a></li>
                    <li><TypeAnimation sequence={["Simon Game:"]} cursor={false} /><a href="https://github.com/vatsa2005/Simon-game.git"><TypeAnimation sequence={["https://github.com/vatsa2005/Simon-game.git"]} cursor={false} /></a></li>
                </ul>
            </div>
            
            <div className="contact">
                <p>{sectionTitles[3]}</p>
                <ul>
                    <li><TypeAnimation sequence={["Github: "]} cursor={false} /><a href="https://github.com/vatsa2005"><TypeAnimation sequence={["https://github.com/vatsa2005"]} cursor={false} /></a> </li>
                    <li><TypeAnimation sequence={["Instagram: "]} cursor={false} /><TypeAnimation sequence={["its_me_vatsa"]} cursor={false} /></li>
                    <li><TypeAnimation sequence={["Email: "]} cursor={false}/><TypeAnimation sequence={["svatsa2005@gmail.com"]} cursor={false} /></li>
                </ul>
            </div>
        </div>
    )
}
export default Home;
