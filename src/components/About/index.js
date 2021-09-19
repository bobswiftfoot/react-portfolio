import React from 'react';
import profilePic from '../../images/profile-picture.png';

function About()
{
    return (
        <div>
            <section className="hero row justify-content-center">
                <img className="col col-12 col-md-6 col-lg-2 img-fluid" src={profilePic} />
                <div className="row justify-content-center">
                    <p className="col col-12 col-md-6 col-lg-2 text-center">Web Developer</p>
                </div>
            </section>

            <section id="about-me" className="about-me row p-3">
                <h2 className="col-12 col-md-2 text-center border-bottom border-primary border-lg-end border-lg-bottom-0">About Me</h2>
                <p className="col">
                    Web Developer with game development experience. Certificate in Web Development from University of Phoenix and Bachelors in Game Development from Full Sail University. Skills in HTML, CSS, Javascript, C#, Node.js and strengths in teamwork, planning and organization including Scrum Master training. I launched a variety of slot machine games including standalone and server connected games. I worked on a team of 3 to create an HTML website to organize a set of APIs for easy user access. I am excited to put my problem solving skills to work by assessing, creating and improving on a variety of programs.
                </p>
            </section>

            <section id="skills" className="skills row p-3">
                <h2 className="col-12 col-md-2 text-center border-bottom border-primary border-lg-end border-lg-bottom-0">Skills</h2>
                <ul className="col col-12 col-lg-2 ms-4">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Node.js</li>
                    <li>MySQL</li>
                </ul>
                <ul className="col col-12 col-lg-2 ms-4">
                    <li>C#</li>
                    <li>C++</li>
                    <li>Javas</li>
                    <li>XAML</li>
                    <li>Unity</li>
                </ul>
                <ul className="col col-12 col-lg-2 ms-4">
                    <li>Github</li>
                    <li>Perforce</li>
                    <li>TeamCity</li>
                    <li>Heroku</li>
                    <li>Scrum Master Training</li>
                </ul>
            </section>
        </div>
    );
}

export default About;