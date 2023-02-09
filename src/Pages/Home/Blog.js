import React from 'react';

const Blog = () => {
    return (
        <section id='blog' className="py-6 sm:py-12 bg-gray-100 text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Our upcoming products</h2>
                    <p className="font-serif text-sm text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    <article
                    data-aos="flip-up"
                    data-aos-duration="1000"
                     className="flex flex-col bg-gray-50">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://m.media-amazon.com/images/I/81Wf1osPJ-L._SL1500_.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600">coming soon</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                <span>June 1, 2023</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </article>
                    <article 
                    data-aos="flip-up"
                    data-aos-duration="2000"
                    className="flex flex-col bg-gray-50">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://uploads-ssl.webflow.com/620b2dbb3ad9173a2ea0cbb2/62cd3de708cab033360811d9_TEORRA%20Blog%20covers%20(7).png" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600">coming soon</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                <span>June 2, 2023</span>
                                <span>3.2K views</span>
                            </div>
                        </div>
                    </article>
                    <article 
                    data-aos="flip-up"
                    data-aos-duration="3000"
                    className="flex flex-col bg-gray-50">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://i.etsystatic.com/22050512/r/il/9f4af9/4074938955/il_fullxfull.4074938955_op53.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600">coming soon</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                <span>June 3, 2023</span>
                                <span>4.3K views</span>
                            </div>
                        </div>
                    </article>
                    <article 
                    data-aos="flip-up"
                    data-aos-duration="3000"
                    className="flex flex-col bg-gray-50">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://i.etsystatic.com/22050512/r/il/d6a6d0/4246253008/il_fullxfull.4246253008_abts.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600">coming soon</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                <span>June 4, 2023</span>
                                <span>5.4K views</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Blog;