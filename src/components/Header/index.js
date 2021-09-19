import React from 'react';

function Header(props)
{
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    return (
        <section key="Header">
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="./index.html">Nathan Pfau</a>
                    <button className="navbar-toggler justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {tabs.map(tab => (
                                    <a
                                        key={tab}
                                        href={'#' + tab.toLowerCase()}
                                        onClick={() => props.handlePageChange(tab)}
                                        className={
                                            props.currentPage === tab ? 'nav-link active' : 'nav-link'
                                        }
                                    >
                                        {tab}
                                    </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Header;