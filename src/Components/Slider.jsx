import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

function Slider() {
  return (
    <>
    <div className="row">
        <div className="col-sm-11 mx-auto">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-interval="3800" data-bs-ride="carousel" >
              <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/slide-1.jpg" className="d-block w-100 rounded rounded-1 img-fluid" height="350px" />
    </div>
    <div className="carousel-item">
      <img src="/slider-2.jpg" className="d-block w-100 rounded rounded-1 img-fluid"  height="350px"/>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
  >
    {/* <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
  >
    {/* <span className="carousel-control-next-icon" aria-hidden="true" /> */}
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
    </div>
    </>
  )
}

export default Slider
