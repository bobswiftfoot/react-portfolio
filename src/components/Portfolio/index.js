import React, { useState } from 'react';
import petSittingImg from '../../images/pet-sitting.png';
import pokemonDatabaseImg from '../../images/pokemon-database.PNG';
import readmeGeneratorImg from '../../images/readme-generator.PNG';
import codeQuizImg from '../../images/code-quiz.png';
import runBuddyImg from '../../images/run-buddy.png';
import { Modal, Button } from 'react-bootstrap';

function Portfolio()
{
    const projects = [
        {
            name: "petSitting",
            col: "project col-12 position-relative border-dark border border-2",
            title: "Pet Sitting - Full Stack",
            img: petSittingImg,
            description: "A website to request and volunteer to sit and walk pets",
            live: "https://rockstars-pet-sitting.herokuapp.com/",
            gitHub: "https://github.com/bobswiftfoot/pet-sitting"
        },
        {
            name: "pokemonDatabase",
            col: "project col-12 col-lg-6 position-relative border-dark border border-2",
            title: "Pokemon Database - HTML/CSS/Javascript",
            img: pokemonDatabaseImg,
            description: "Pokemon Database is a place to get all your pokemon information.",
            live: "https://bobswiftfoot.github.io/bootcamp-project-1/",
            gitHub: "https://github.com/bobswiftfoot/bootcamp-project-1/"
        },
        {
            name: "readmeGenerator",
            col: "project col-12 col-lg-6 position-relative border-dark border border-2",
            title: "Readme Generator - Node.js",
            img: readmeGeneratorImg,
            description: "A Node.js app to generate a readme for your projects.",
            live: "https://github.com/bobswiftfoot/readme-generator/",
            gitHub: "https://github.com/bobswiftfoot/readme-generator/"
        },
        {
            name: "codeQuiz",
            col: "project col-12 col-lg-6 position-relative border-dark border border-2",
            title: "Code Quiz - HTML/CSS/Javascript",
            img: codeQuizImg,
            description: "A quiz app to test your coding knowledge.",
            live: "https://bobswiftfoot.github.io/code-quiz/",
            gitHub: "https://github.com/bobswiftfoot/code-quiz/"
        },
        {
            name: "runBuddy",
            col: "project col-12 col-lg-6 position-relative border-dark border border-2",
            title: "Run Buddy - HTML/CSS",
            img: runBuddyImg,
            description: "A sample fitness website.",
            live: "https://bobswiftfoot.github.io/run-buddy/",
            gitHub: "https://github.com/bobswiftfoot/run-buddy/"
        }];

    const [show, setShow] = useState("none");
    const handleClose = () => setShow("none");

    function handleShow(project)
    {
        setShow(project);
    }

    return (
        <section id="work" className="work row p-3">
            <h2 className="col-12 col-md-2 text-center border-bottom border-primary border-lg-end border-lg-bottom-0">Work</h2>
            <div className="project-wrapper col">
                <div className="row gx-0">
                    {projects.map((value, index) => (
                        <div className={value.col}>
                            <Button onClick={() => handleShow(value.name)}>
                                <h3 className="position-absolute bottom-0 end-0 mb-0">{value.title}</h3>
                                <img className="img-fluid" src={value.img} />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            {projects.map((value, index) => (
                <Modal show={show == value.name} onHide={handleClose} size="xl" >
                    <Modal.Header closeButton>
                        {value.description}
                    </Modal.Header>
                    <Modal.Body>
                        <img src={value.img} className="img-fluid" />
                    </Modal.Body>
                    <Modal.Footer className="modal-footer">
                        <Button variant="primary" href={value.live} >Live Site</Button>
                        <Button variant="primary" href={value.gitHub} >Github</Button>
                    </Modal.Footer>
                </Modal>
            ))};
            <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
        </section >
    );
}

export default Portfolio;
