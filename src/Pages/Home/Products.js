import React from 'react';
import img1 from '../../Assets/Products/kit-1.jpg';
import img2 from '../../Assets/Products/kit-2.jpg';
import img3 from '../../Assets/Products/kit-3.jpg';
import img4 from '../../Assets/Products/kit-4.jpg';
import img5 from '../../Assets/Products/kit-5.jfif';
import img6 from '../../Assets/Products/kit-6.jfif';
import ProductCard from './ProductCard';

const Products = () => {
    const products = [
        {
            id: 1,
            picture: img1,
            name: 'product-1',
            info: 'This is a very good product, you should use it, and share with your all friends, do not forget to give your feedback '
        },
        {
            id: 2,
            picture: img2,
            name: 'product-2',
            info: 'This is a very good product, you should use it, and share with your all friends, do not forget to give your feedback '
        },
        {
            id: 3,
            picture: img3,
            name: 'product-3',
            info: 'This is a very good product, you should use it, and share with your all friends, do not forget to give your feedback '
        },
        {
            id: 4,
            picture: img4,
            name: 'product-4',
            info: 'This is a very good product, you should use it, and share with your all friends, do not forget to give your feedback '
        },
        {
            id: 5,
            picture: img5,
            name: 'product-5',
            info: 'This is a very good product, you should use it, and share with your all friends, do not forget to give your feedback '
        },
        {
            id: 6,
            picture: img6,
            name: 'product-6',
            info: 'This is a very good product, you should use it, and share with your all friends, do not forget to give your feedback '
        },
    ]

    return (
        <div>
            <div
            data-aos="fade-up"
            data-aos-duration="3000" 
            
            className='text-center mt-20 mb-10'>
                <p className='text-violet-600'>our products</p>
                <h3 className='text-4xl font-bold'>Just try it out</h3>
            </div>

            {/* products section  */}
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1100px] mx-auto'>
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;