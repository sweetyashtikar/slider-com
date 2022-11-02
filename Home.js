import React from 'react';
import Banner from './Common/Banner';

const Home = () => {
    return (
<React.Fragment>
    <Banner/>
        <div id='services'>
            <div className='container pt-2 pb-5'>
                <div className='section-header pt-5 pb-5 text-center'>
                    <h3 className='section-title'>
                        <span>Our </span>Services
                    </h3>
                    <h3>
                        Individualized quality care that meets the total needs of the
                        patient Individualized quality care that quality care that
                        Individualized quality care that meets the total.
                    </h3>
                </div>
                <div className='section-content'>
                    <div className='row'>
                        <div className='col-md-3 col-lg-4 mb-3'>
                            <div className='service-box d-flex'>
                                <div className='service-icon mr-4'>
                                    <i className='fa-solid fa-code' />
                                </div>
                                <div className='service-body'>
                                    <h5 className='service-title'>Web Designing & Development</h5>
                                    <p className='service-description'>
                                        For us, designing & development is something
                                        that can convert any visitor into your permanent customers, we build something similar.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mb-3'>
                            <div className='service-box d-flex'>
                                <div className='service-icon mr-4'>
                                    <i className='fa-solid fa-briefcase' />
                                </div>
                                <div className='service-body'>
                                    <h5 className='service-title'>Grow your business</h5>
                                    <p className='service-description'>
                                        We will help you to grow your business
                                        with the latest SEO technology and attractive web designing and development programs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mb-3'>
                            <div className='service-box d-flex'>
                                <div className='service-icon mr-4'>
                                    <i className='far fa-paper-plane' />
                                </div>
                                <div className='service-body'>
                                    <h5 className='service-title'>Search Engine Optimization</h5>
                                    <p className='service-description'>
                                        SEO is the heart of any website, with the help of it,
                                        the lifetime and reach of the website will grow more and more. Don't you want that for your business?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mb-3'>
                            <div className='service-box d-flex'>
                                <div className='service-icon mr-4'>
                                    <i className='fa-solid fa-lightbulb' />
                                </div>
                                <div className='service-body'>
                                    <h5 className='service-title'>Social Media</h5>
                                    <p className='service-description'>
                                        Social Media is a great platform via one can grow its business amongst users and we are great at that.
                                        Our Social Media experts will help to grow your business through Social Media Marketing.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mb-3'>
                            <div className='service-box d-flex'>
                                <div className='service-icon mr-4'>
                                    <i className='fas fa-gem' />
                                </div>
                                <div className='service-body'>
                                    <h5 className='service-title'>CRM Developement</h5>
                                    <p className='service-description'>
                                        For unique business, a unique software is required and that's
                                        where we come to business. Tell us about your requirement and we will build the similar requirement.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mb-3'>
                            <div className='service-box d-flex'>
                                <div className='service-icon mr-4'>
                                    <i className='fa-regular fa-circle-user' />
                                </div>
                                <div className='service-body'>
                                    <h5 className='service-title'>SEO Content Writing</h5>
                                    <p className='service-description'>
                                        Huh! Looking for a professional content writer who can provide you the quality SEO content?
                                        Our experts are there to write the content that will definitely loved by your users.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </React.Fragment>

    );
}

export default Home;
