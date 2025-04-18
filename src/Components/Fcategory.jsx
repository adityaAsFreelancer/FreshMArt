import React from 'react';

const Fcategory = () => {
    const fcategory = [
        {
            title: 'Dairy, Bread & Eggs',
            img: '/category-dairy-bread-eggs.jpg'
        },
        {
            title: 'Snacks & Munchies',
            img: '/category-snack-munchies.jpg'
        },
        {
            title: 'Bakery & Biscuits',
            img: '/category-bakery-biscuits.jpg'
        },
        {
            title: 'instant food',
            img: '/category-instant-food.jpg'
        },
        {
            title: 'Tea,coffe & Drink',
            img: '/category-tea-coffee-drinks.jpg'
        },
        {
            title: 'Aata Rice & DaL',
            img: '/category-atta-rice-dal.jpg'
        },
        {
            title: 'Chiken Meat & Fish',
            img: '/category-chicken-meat-fish.jpg'
        },
        {
            title: 'Baby Care',
            img: '/category-baby-care.jpg'
        },
        {
            title: 'Cleaning Essential',
            img: '/category-cleaning-essentials.jpg'
        },
        {
            title: 'Pet Care',
            img: '/category-pet-care.jpg'
        },
        {
            title: 'Fruits & Vegetables',
            img: '/category-instant-food.jpg'
        },
        {
            title: 'Dairy, Bread & Eggs',
            img: '/category-dairy-bread-eggs.jpg'
        }
    ]
    return (
        <div>
            <h4 className='h4 fw-bold mt-3 ms-2'>Freshmart Category</h4 >
            <div className="row px-3">
                {
                    fcategory.map((item) => {
                        return (
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mt-3" key={item.title}>
                                <div className="card fcard shadow-sm border-0">
                                    <img src={item.img} className="card-img-top fimage img-fluid ms-5" alt={item.title} />
                                    <div className="card-body text-center">
                                        <h5 className="card-title fcardtext text-dark mt-2">{item.title}</h5>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="row mt-4 px-3">
                <div className="col-12 col-md-6 mt-3">
                    <div className="card w-100 position-relative card-border">
                        <img src='/grocery-banner.png' className="card-img-top bigcard" />
                        <div className="card-body position-absolute">
                            <h5 className="card-title h2 fw-bold pt-3">Fruits & Vegetables</h5>
                            <p className="card-text text-muted pt-2">
                                Get Upto <b>30%</b> Off
                            </p>
                            <a href="#" className="btn btn-card">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-3">
                    <div className="card w-100 position-relative card-border">
                        <img src='/grocery-banner-2.jpg' className="card-img-top bigcard" />
                        <div className="card-body position-absolute">
                            <h5 className="card-title h2 fw-bold pt-3">Freshly Baked Buns</h5>
                            <p className="card-text text-muted pt-2">
                                Get Upto <b>25%</b> Off
                            </p>
                            <a href="#" className="btn btn-card">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fcategory;
