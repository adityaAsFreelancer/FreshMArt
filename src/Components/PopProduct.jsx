import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

function PopProduct() {
    const pcard = [
        {
            offer: 'Sale',
            img: '/product-img-1.jpg',
            category: 'Snack & Munchies',
            title: 'Haldiram s Sev Bhujia',
            fulstar: <FaStar />,
            halfstar: <FaRegStarHalfStroke />,
            rating: 4.5,
            trating: 149,
            price: '$18',
            dis_price: '$24'
        },
        {
            offer: 'Sale',
            img: '/product-img-2.jpg',
            category: 'Bakery & Biscuits',
            title: 'NutriChoice Digestive',
            fulstar: <FaStar />,
            halfstar: <FaRegStarHalfStroke />,
            rating: 4.5,
            trating: 25,
            price: '$24',
            dis_price: '$30'
        },
        {
            offer: 'Sale',
            img: '/product-img-3.jpg',
            category: 'Bakery & Biscuits',
            title: 'Cadbury 5 Star Chocolate',
            fulstar: <FaStar />,
            halfstar: < FaStar/>,
            rating: 5,
            trating: 469,
            price: '$32',
            dis_price: '$35'
        },
        {
            offer: 'Sale',
            img: '/product-img-4.jpg',
            category: 'Snack & Munchies',
            title: 'Onion Flavour Potato',
            fulstar: <FaStar />,
            halfstar: < FaRegStarHalfStroke/>,
            rating: 3.5,
            trating: 456,
            price: '$3',
            dis_price: '$5'
        },
        {
            offer: 'Sale',
            img: '/product-img-5.jpg',
            category: 'Instant Food',
            title: 'Salted Instant Popcorn',
            fulstar: <FaStar />,
            halfstar: < FaRegStarHalfStroke/>,
            rating: 4.5,
            trating: 39,
            price: '$13',
            dis_price: '$18'
        },
        {
            offer: 'Sale',
            img: '/product-img-6.jpg',
            category: 'Dairy, Bread & Eggs',
            title: 'Blueberry Greek Yogurt',
            fulstar: <FaStar />,
            halfstar: < FaRegStarHalfStroke/>,
            rating: 4.5,
            trating: 189,
            price: '$18',
            dis_price: '$28'
        },
        {
            offer: 'Sale',
            img: '/product-img-7.jpg',
            category: 'Dairy, Bread & Eggs',
            title: 'Britannia Cheese Slices',
            fulstar: <FaStar />,
            halfstar: < FaStar/>,
            rating: 5,
            trating: 345,
            price: '$24',
            dis_price: ''
        },
        {
            offer: 'Sale',
            img: '/product-img-8.jpg',
            category: 'Instant Food',
            title: 'Kellogg s Original Cereals',
            fulstar: <FaStar />,
            halfstar: <FaStar />,
            rating: 4,
            trating: 90,
            price: '$32',
            dis_price: '$35'
        },
        {
            offer: 'Sale',
            img: '/product-img-9.jpg',
            category: 'Snack & Munchies',
            title: 'Slurrp Millet Chocolate',
            fulstar: <FaStar />,
            halfstar: <FaStar />,
            rating: 4.5,
            trating: 90,
            price: '$3',
            dis_price: '$5'
        },
        {
            offer: 'Sale',
            img: '/product-img-10.jpg',
            category: 'Dairy, Bread & Eggs',
            title: 'Amul Butter - 500 g',
            fulstar: <FaStar />,
            halfstar: <FaStar />,
            rating: 4.5,
            trating: 90,
            price: '$13',
            dis_price: '$18'
        },
    ]
    return (
        <>
            <h4 className='h4 fw-bold mt-3 ms-2'>Popular Products</h4 >
            <div className="row ps-5">
                <div className="col-sm-12">
                    <div className="row">
                        {
                            pcard.map((item) => {
                                return (
                                    <div className="col-sm-4 col-md-3 col-lg-2 mb-4 me-4" key={item.title}>
                                        <div className="card pcard shadow-sm position-relative">
                                            <div className='position-absolute mt-3 ms-3 bgclr fw-bold px-1 rounded-2 '><span className='text-light'>Sale</span></div>
                                            <div className="card-body">
                                                <img className="card-img-top w-100" src={item.img} alt={item.title} height={'150px'} width={'250px'} />
                                                <p className="card-text pcard-text fw-bold text-muted">{item.category}</p>
                                                <h5 className="card-title pcard-text fw-bolder">{item.title}</h5>
                                                <div className="d-flex align-items-center">
                                                    {item.fulstar}{item.fulstar}{item.fulstar}{item.fulstar}{item.halfstar}
                                                    <span className="ms-2 pcard-text">{item.rating}</span><small className="text-muted pcard-text">({item.trating})</small>
                                                </div>
                                                <p className="card-text mt-3">
                                                    <span className="price-text fw-bold">{item.price}</span>&nbsp;
                                                    <del className='text-muted fw-bold price-text'>{item.dis_price}</del>
                                                    <span className='ms-5'><a href="#" className="btn bgclr text-end btn-sm text-light fw-bold">
                                                        + Add
                                                    </a></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopProduct
