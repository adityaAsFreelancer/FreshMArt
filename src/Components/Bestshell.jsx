import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

function Bestshell() {
    const pcard = [
        {
            img: '/product-img-11.jpg',
            category: 'Tea, Coffee & Drinks',
            title: 'Roast Ground Coffee',
            fulstar: <FaStar />,
            halfstar: <FaRegStarHalfStroke />,
            rating: 4.5,
            price: '$13',
            dis_price: '$18'
        },
        {
            img: '/product-img-12.jpg',
            category: 'Fruits & Vegetables',
            title: 'Crushed Tomatoes',
            fulstar: <FaStar />,
            halfstar: <FaRegStarHalfStroke />,
            rating: 4.5,
            trating: 149,
            price: '$18',
            dis_price: '$24'
        },
        {
            img: '/product-img-13.jpg',
            category: 'Fruits & Vegetables',
            title: 'Golden Pineapple',
            fulstar: <FaStar />,
            halfstar: <FaRegStarHalfStroke />,
            rating: 4.5,
            trating: 149,
            price: '$18',
            dis_price: '$24'
        },
    ]
    return (
        <>
            <h4 className='h4 fw-bold mt-2 ms-2'>Daily Best Sells</h4 >
            <div className="row">
                <div className="col-12 col-sm-3" accordion
                >
                <div className="card w-100 card-border bestsellcard">
                        <img src='/banner-deal.jpg' className="img-fluid mb-5" />
                        <div className="card-body position-absolute text-light">
                            <h5 className="card-title h2 fw-bold pt-3">100% Organic Coffee Beans.</h5>
                            <p className="card-text text-light pt-2">
                                Get the best deal before close.
                            </p>
                            <a href="#" className="btn text-light bgclr">
                                Shop Now &rarr;
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-9">
                    <div className="row ">
                {
                            pcard.map((item, index) => {
                                return (
                                    <div className="col-12 col-md-6 col-lg-4 mb-4 " key={index}>
                                        <div className="card sellcard shadow-sm position-relative mb-4">
                                            <div className="card-body d-flex flex-column">
                                                <img className="card-img-top w-100 mb-3" src={item.img} alt={item.title} height={'150px'} />
                                                <p className="card-text pcard-text fw-bold text-muted">{item.category}</p>
                                                <span className="card-title pcard-text fw-bolder ">{item.title}</span>
                                                <div className="d-flex align-items-center">
                                                </div>
                                                <p className="card-text mt-2">
                                                    <span className="price-text fw-bold">{item.price}</span>&nbsp;
                                                    <del className='text-muted fw-bold price-text me-5'>{item.dis_price}</del>
                                                    <span className='text-end'> {item.fulstar}{item.fulstar}{item.fulstar}{item.fulstar}{item.halfstar}
                                                        <span className="ms-2 pcard-text">{item.rating}</span></span>
                                                </p>
                                                <p className="card-text mt-3">
                                                    <a href="#" className="btn py-2 bgclr text-center btn-sm w-100 text-light fw-bold mt-auto">
                                                        + Add to Cart
                                                    </a>
                                                </p>
                                                <p className='card-text px-2'>
                                                    <ul className='d-flex list-unstyled'>
                                                        <li className='bg-light border border-1 p-2 text-center me-2 rounded-3'>
                                                            <span className='fw-bold'> 1368 <br /><span className='text-muted'>Days</span></span>
                                                        </li>
                                                        <li className='bg-light border border-1 p-2 text-center me-2 rounded-3'>
                                                            <span className='fw-bold'> 23 <br /><span className='text-muted'>Hours</span></span> 
                                                        </li>
                                                        <li className='bg-light border border-1 p-2 ps-3 pe-3 text-center me-2 rounded-3'>
                                                            <span className='fw-bold'> 29 <br /><span className='text-muted'>Min</span></span> 
                                                        </li>
                                                        <li className='bg-light border border-1 p-2 ps-3 pe-3 text-center me-2 rounded-3'>
                                                            <span className='fw-bold'> 25 <br /><span className='text-muted'>Sec</span></span> 
                                                        </li>
                                                    </ul>
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


export default Bestshell
