import React from 'react'

function Footer() {
    return (
        <>
            <div className="container-fluid footerclr p-4">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <ul className='list-unstyled footer text-muted'>
                            <li className='fw-bold mb-3 fs-5 text-dark'>Categories</li>
                            <li>Vegetables & Fruits</li>
                            <li>Breakfast & instant food</li>
                            <li>Bakery & Biscuits</li>
                            <li>Atta, rice & dal</li>
                            <li>Sauces & spreads</li>
                            <li>Organic & gourmet</li>
                            <li>Baby care</li>
                            <li>Cleaning essentials</li>
                            <li>Personal care</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <ul className='list-unstyled footer text-muted'>
                            <li className='fw-bold mb-3 fs-5 text-dark'></li>
                            <li>Dairy, bread & eggs</li>
                            <li>Cold drinks & juices</li>
                            <li>Tea, coffee & drinks</li>
                            <li>Chicken, meat & fish</li>
                            <li>Masala, oil & more</li>
                            <li>Paan corner</li>
                            <li>Pharma & wellness</li>
                            <li>Home & office</li>
                            <li>Pet care</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <ul className='list-unstyled footer text-muted'>
                            <li className='fw-bold mb-3 fs-5 text-dark'>Get to know us</li>
                            <li>Company</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Help Center</li>
                            <li>Our Value</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <ul className='list-unstyled footer text-muted'>
                            <li className='fw-bold mb-3 fs-5 text-dark'>For Consumers</li>
                            <li>Payments</li>
                            <li>Shipping</li>
                            <li>Product Returns</li>
                            <li>FAQ</li>
                            <li>Shop Checkout</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <ul className='list-unstyled footer text-muted'>
                            <li className='fw-bold mb-3 fs-5 text-dark'>Become a Shopper</li>
                            <li>Shopper Opportunities</li>
                            <li>Become a Shopper</li>
                            <li>Earnings</li>
                            <li>Ideas & Guides</li>
                            <li>New Retailers</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <ul className='list-unstyled footer text-muted'>
                            <li className='fw-bold mb-3 fs-5 text-dark'>Cart Programs</li>
                            <li>Freshcart programs</li>
                            <li>Gift Cards</li>
                            <li>Promos & Coupons</li>
                            <li>Freshcart Ads</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>
                <hr className='mt-4' />
            </div>
            <div className="container-fluid footerclr px-2">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-7 mb-3">
                                <ul className='list-unstyled footer text-muted d-flex flex-wrap'>
                                    <li className='fw-bold mb-3 fs-5 text-dark'>Payment Partners</li>
                                    <li className='ms-2'>
                                        <img src="/amazonpay.svg" height={'40px'} alt="Amazon Pay" />
                                    </li>
                                    <li className='ms-2'>
                                        <img src="/american-express.svg" height={'40px'} alt="American Express" />
                                    </li>
                                    <li className='ms-2'>
                                        <img src="/mastercard.svg" height={'40px'} alt="Mastercard" />
                                    </li>
                                    <li className='ms-2'>
                                        <img src="/paypal.svg" height={'40px'} alt="Paypal" />
                                    </li>
                                    <li className='ms-2'>
                                        <img src="/visa.svg" height={'40px'} alt="Visa" />
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-5 mb-3">
                                <ul className='list-unstyled footer text-muted d-flex flex-wrap'>
                                    <li className='ms-2 pt-2'>
                                        <span className='text-dark'>Get deliveries with FreshCart</span>
                                    </li>
                                    <li className='ms-2'>
                                        <img src="/appstore-btn.svg" height={'40px'} alt="App Store" />
                                    </li>
                                    <li className='ms-2'>
                                        <img src="/googleplay-btn.svg" height={'40px'} alt="Google Play" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container-fluid footerclr">
                <div className="row">
                    <div className="col-12 text-center">
                        <span className='copyright d-block fw-bold text-muted'>&copy;2025 FreshCart TailwindCSS eCommerce HTML Template. Powered by <span className='txtclr fw-bold'>Codescandy</span>.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
