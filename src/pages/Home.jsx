import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <Jumbotron title="Welcome" subtitle="Put something witty here!" /> */}
          <Sidebar />
        <section id="product-list">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="text-center mt-5" data-aos="fade-up" data-aos-delay="400">Product List</h1> 
              </div>
              <div className="col-md-4">
                <div className="product-image" data-aos="fade-up" data-aos-delay="500">
                  <img src={window.location.origin + '/images/product-1.webp'} width="100%" alt="image"/>
                  <div className="card-body">
                    <p>desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-image" data-aos="fade-up" data-aos-delay="500">
                  <img src={window.location.origin + '/images/product-2.webp'} width="100%" alt="image"/>
                  <div className="card-body">
                    <p>desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-image" data-aos="fade-up" data-aos-delay="500">
                  <img src={window.location.origin + '/images/product-3.webp'} width="100%" alt="image"/>
                  <div className="card-body">
                    <p>desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about-section" className="section-about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="text-center mb-5" data-aos="fade-up" data-aos-delay="400">About Us</h1> 
              </div>
              <div className="col-md-6">
                <div className="left-side-column" data-aos="fade-up" data-aos-delay="500">
                  <img src={window.location.origin + '/images/about.jpeg'} width="100%" alt="image"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-side-column" data-aos="fade-up" data-aos-delay="500">
                  <p><img src={window.location.origin + '/images/icon.png'} alt="image"/></p>
                  <h2 className="text-center">Shoe is an art</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home
