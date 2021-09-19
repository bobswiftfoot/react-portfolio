import React from 'react';

function Header()
{
    return (
        <section>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="./index.html">Nathan Pfau</a>
                    <button className="navbar-toggler justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="#about-me">About Me</a>
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                            <a className="nav-link" href="#contact-me">Contact Me</a>
                            <a className="nav-link" href="./resume.html">Resume</a>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Header;