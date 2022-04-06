import React from 'react'
import Button from './Button';
import Image from './Image';
//import photo from '../images/image.jpg'
//import styles from '../index.css'

export default function LeftBlock(props){
    
    

    const img = {
        objectFit: 'cover',
         position: 'fixed',
         zIndex: '50',
         width: '400px',
         height: '300px',
         borderRadius: '10px',
         boxShadow: '5px 5px gray'

    };
    return (
        <div className="col-md-4" style={{ backgroundColor: "#dde8ea" }}>
                <div className="row mt-2">
                    <div className="col-md-12">
                       <p className="text-center"> Home / <span className="font-weight-bold">Product Detail Page</span></p>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center px-5">
                    <div className="col-md-10">

                        <div className="row">
                            <div className="col-md-12">
                                <p className="text-center float-left" style={{ fontSize: "1.5rem" }}>Tags:</p>
                            </div>
                        </div>

                       <div className="row wrapper">
                           <div className="col-md-5">
                               <Button 
                                    classVal="btn btn-light"
                                    style={{ borderRadius: "12px" }}
                                    value="Kitchen"
                               />
                           </div>
                           <div className="col-md-6">
                                <Button 
                                    classVal="btn btn-light"
                                    style={{ borderRadius: "12px" }}
                                    value="L-Shape"
                               />
                           </div>
                           <div className="col-md-2 mt-2">
                                <Button 
                                    classVal="btn btn-light"
                                    style={{ borderRadius: "12px" }}
                                    value="Sustainable"
                               />
                           </div>
                       </div>

                       <div className="row mt-4">
                           <div className="col-md-4">
                               <div className="row mb-2">
                                   <div className="col-md-12">
                                       <Image 
                                            src={props.image1}

                                        />
                                   </div>
                               </div>
                               <div className="row mb-2">
                                   <div className="col-md-12">
                                   <Image 
                                        src={props.image1}
                                        />
                                   </div>
                               </div>
                               <div className="row mb-2">
                                   <div className="col-md-12">
                                   <Image 
                                        src={props.image1}
                                        />
                                   </div>
                               </div>
                               <div className="row mb-2">
                                   <div className="col-md-12">
                                   <Image 
                                        src={props.image1}
                                        />
                                   </div>
                               </div>    
                           </div> 
                           <div className="col-md-8">
                                <img 
                                    src={props.image2}
                                    alt=""
                                    style={img}
                                />
                           </div>   
                       </div>
                    </div>
                </div>
            </div>
    );
}
