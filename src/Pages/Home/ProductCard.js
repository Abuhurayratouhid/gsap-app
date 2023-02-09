import React from 'react';
import { gsap,} from "gsap/all";

const ProductCard = ({ product }) => {

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.1 });
      };
      const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { backgroundColor: "#edede9", scale: 1 });
      };
    return (
        <div
        data-aos="flip-left"
        data-aos-duration="3000"
        // onMouseEnter={onEnter} 
        // onMouseLeave={onLeave}
         className="card max-w-96 bg-base-200 hover:bg-violet-400 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product.picture} alt="Product" className="rounded-xl w-60 h-40" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.info}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;