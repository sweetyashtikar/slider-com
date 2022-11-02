import React from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <footer id='footerbg' className='p-4'>
                

                <section className='d-flex justify-content-center'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>get connected to social media</span>
                    </div>
                    <div>
                        <a href=''></a>
                    </div>
                </section>


                <div className='container p-4' >
                    <div className='row'>
                        <div className='col-sm-4'>
                            <h5>About us</h5>
                            <p>It is certainly the most famous placeholder text even if there are different
                                versions distinguishable from the order in which the Latin words are repeated.
                            </p>

                            <div className='col-sm-2'>
                                <h5>Navigation</h5>
                                <p><a href=''>Home</a></p>
                                <p><a href=''>About Us</a></p>
                                <p><a href=''>Contact Us</a></p>
                            </div>

                            <div className='col-sm-2'>
                                <h5>Services</h5>
                                <p><a href=''>Home</a></p>
                                <p><a href=''>About Us</a></p>
                                <p><a href=''>Contact Us</a></p>
                            </div>

                            <div className='col-sm-2'>
                                <h5>Address</h5>
                                <p>India</p>
                                <p>pin box no +91</p>
                                <p>1234567890 </p>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
