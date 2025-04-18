import React from 'react'

function Content() {
    const content = [
        {
            img: '/clock.svg',
            heading: '10 minute grocery now',
            text: 'Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.'
        },
        {
            img: '/gift.svg',
            heading: 'Best Prices & Offers',
            text: 'Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.'
        },
        {
            img: '/package.svg',
            heading: 'Wide Assortment',
            text: 'Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.'
        },
        {
            img: '/refresh-cw.svg',
            heading: 'Easy Returns',
            text: 'Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked'
        },
    ]
    return (
        <>
            <div className="row px-5">
                {
                    content.map((item, index) => {
                        return (
                            <div key={index} className="col-12 col-sm-6 col-md-3 ps-3 mb-4">
                                <img src={item.img} className="img-fluid" alt={item.heading} />
                                <h5 className='mt-3 fw-semibold'>{item.heading}</h5>
                                <p className='text-muted'>
                                    {item.text} <span className='txtclr'>policy .</span>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Content
