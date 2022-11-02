import React, { useState, useEffect } from 'react';
import Banner1 from './../../Components/Common/banner1.webp';
import Banner2 from './../../Components/Common/banner2.webp';
import Banner3 from './../../Components/Common/banner3.webp';
import Banner4 from './../../Components/Common/banner4.webp';





function Banner() {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        const getbanner = async () => {
            const res = await fetch('http://localhost/kodegurusdevloper/banner');
            const getbanner = await res.json();
            console.log(getbanner);
            setBanner(await getbanner);
        }
        getbanner();
    }, []);


    return (

        <React.Fragment>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {/* {
                        banner.map((retbanner, index)=> {
                            return(
                                <div className={index===0 ? "carousel-item active ":" carousel-item"} >
                                    <img src={`http://localhost/kodegurusdevloper/uploads/banner/${retbanner.banner_image}`} className="d-block w-100" alt='...' />
                                </div>
                            )
                        })
                    } */}
                    <div className="carousel-item active">
                        <img src={Banner1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner4} className="d-block w-100" alt="..." />
                    </div>

                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </React.Fragment>



    );
}

export default Banner;
