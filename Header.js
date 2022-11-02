import React from 'react';

const Header = () => {
    return (
        <React.Fragment>
            <nav className='navbar navbar-expand-lg navbar-light bg-light headerbg'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>KODEGURUS</a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedcontent' arial-controls='navbar' >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                </div>
                <div className='collapse navbar-collapse' id='#navbarSupportedcontent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page' href='#'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link ' href='#'>About</a>
                        </li>

                        <li className='nav-item'>
                            <a className='nav-link ' href='#'>Services</a>
                        </li>

                        <li className='nav-item'>
                            <a className='nav-link ' href='#'>protfolio</a>
                        </li>

                        <li className='nav-item'>
                            <a className='nav-link ' href='#'>Contact</a>
                        </li>

                    </ul>
                    {/* <form className='d-flex'>
                        <input className='from-control me-2' type='search' placeholder='search' aria-aria-label='' search />
                        <button className='btn btn-outline-success' type='submit'>search</button>
                    </form> */}
                </div>

            </nav>

        </React.Fragment>
    );
}

export default Header;
