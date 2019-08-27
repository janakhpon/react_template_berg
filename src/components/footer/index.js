import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h6 className="text-white text-uppercase mb-20">About Agency</h6>
                                <ul className="footer-nav">
                                    <li><a href="/">Managed Website</a></li>
                                    <li><a href="/">Manage Reputation</a></li>
                                    <li><a href="/">Power Tools</a></li>
                                    <li><a href="/">Marketing Service</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h6 className="text-white text-uppercase mb-20">Navigation Links</h6>
                                <ul className="footer-nav">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Main Features</a></li>
                                    <li><a href="/">Offered Services</a></li>
                                    <li><a href="/">Latest Portfolio</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h6 className="text-white text-uppercase mb-20">Navigation Links</h6>
                                <ul className="footer-nav">
                                    <li><a href="/">Works & Builders</a></li>
                                    <li><a href="/">Works & Wordpress</a></li>
                                    <li><a href="/">Works & Templates</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h6 className="text-white text-uppercase mb-20">Instafeed</h6>
                                <ul className="instafeed d-flex flex-wrap">
                                    <li><img src="img/i1.jpg" alt="" /></li>
                                    <li><img src="img/i2.jpg" alt="" /></li>
                                    <li><img src="img/i3.jpg" alt="" /></li>
                                    <li><img src="img/i4.jpg" alt="" /></li>
                                    <li><img src="img/i5.jpg" alt="" /></li>
                                    <li><img src="img/i6.jpg" alt="" /></li>
                                    <li><img src="img/i7.jpg" alt="" /></li>
                                    <li><img src="img/i8.jpg" alt="" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                        <p className="footer-text m-0">Copyright &copy; 2017 All rights reserved   |   This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com">Colorlib</a></p>
                        <div className="footer-social d-flex align-items-center">
                            <a href="/"><i className="fa fa-facebook"></i></a>
                            <a href="/"><i className="fa fa-twitter"></i></a>
                            <a href="/"><i className="fa fa-dribbble"></i></a>
                            <a href="/"><i className="fa fa-behance"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
