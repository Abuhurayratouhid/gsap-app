import React from 'react';

const MiddleHero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="zoom-in-left" data-aos-duration="3000" alt='kit' src="https://blog.miva.com/hubfs/sustainability-in-ecommerce-header-2-1.jpeg" className="w-1/2 rounded-lg shadow-2xl" />
                    <div data-aos="zoom-in-right" data-aos-duration="3000">
                        <h1 className="text-5xl font-bold">Our new kit!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">pre order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleHero;