import React, { Component } from 'react';
import './index.css'

export default class Banner extends Component {

    render() {
        return (
            <section className="generic-banner relative">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row height align-items-center justify-content-center">
                        <div className="col-lg-10">
                            <div className="banner-content text-center">
                                <h2 className="text-white">The Elements Page</h2>
                                <p className="text-white">It won’t be a bigger problem to find one video game lover in your neighbor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
