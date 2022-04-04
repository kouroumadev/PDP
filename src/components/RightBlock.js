import React, {useState} from 'react'
//import Button from './Button';

export default function RightBlock() {

    const [card, setCard] = useState(0)

    function addCard() {
        setCard(prev => prev +1)
    }

    function minusCard() {
        setCard(prev => prev -1)
    }

    
    return (
        <div className="col-md-8" style={{ backgroundColor: "#f8f8f8" }}>

                <div className="row mt-2">
                    <div className="col-md-4">
                        <p>Navigation Category A</p>
                    </div>
                    <div className="col-md-4">
                        <p>Navigation Item A</p>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-8">
                        <p style={{ fontSize: "2rem" }}>Product Name ABC</p>
                        <p className="" style={{ fontSize: "0.8rem", marginTop: "-20px" }}>Product Category Name(Example Plywood)</p>
                    </div>
                    <div className="col-md-2">
                        <i className="fa fa-heart-o fa-2x float-right text-danger mt-3" aria-hidden="true"></i>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <span className="fa fa-star checked" style={{ color: "orange" }}></span>
                        <span className="fa fa-star checked" style={{ color: "orange" }}></span>
                        <span className="fa fa-star checked" style={{ color: "orange" }}></span>
                        <span className="fa fa-star checked" style={{ color: "orange" }}></span>
                        <span className="fa fa-star checked" style={{ color: "#dde8ea" }}></span>
                    </div>
                    <div className="col-md-3">
                        <p className="text-start"><span className="font-weight-bold">4.4</span> <span className="text-muted">(328 reviews)</span></p>
                    </div>
                    <div className="col-md-3">
                        <p className="text-danger"><u>Build My Project</u></p>
                    </div>
                    <div className="col-md-4">
                        <p className="font-weight-bold" style={{ fontSize: "1rem" }}>$2110.00 <span className="font-weight-bold" style={{ fontSize: "0.7rem" }}>per sheet</span> </p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-9">

                        <div className="row mt-4">
                            <div className="col-md-12"><p className="font-weight-bold">Product Description</p></div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <span className="text-muted">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores distinctio, et atque minima, odit perferendis placeat exercitationem in libero molestias maxime cupiditate excepturi ea deleniti aperiam iure quos ipsam quibusdam.
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores distinctio, et atque minima, odit perferendis placeat exercitationem in libero molestias maxime cupiditate excepturi ea deleniti aperiam iure quos ipsam quibusdam.
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores distinctio, et atque minima, odit perferendis placeat exercitationem in 
                                </span>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-4">
                                <p>Avaible online <span className="font-weight-bold">189</span> </p>
                            </div>
                            <div className="col-md-1">
                                <button className="btn btn-warning ml-1 mr-1"
                                    onClick={minusCard}><i class="fa fa-minus text-white" aria-hidden="true"></i></button>
                            </div>
                            <div className="col-md-1">
                                <span className="font-weight-bold ml-2" style={{ fontSize: '1.5rem' }}>{card}</span>
                            </div>
                            <div className="col-md-1">
                                <button className="btn btn-primary ml-1"
                                    onClick={addCard}><i class="fa fa-plus text-white" aria-hidden="true"></i></button>
                            </div>
                            <div className="col-md-5">
                                
                            </div>
                        </div> <hr/>
                    </div>
                </div>
            </div>
    );
}