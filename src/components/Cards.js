import React from 'react'
import {Link} from 'react-router-dom';
export const Cards = () => {
    return (
        <div>
                <div class="container px-lg-5">
               
                        <div class="row gx-lg-5">
                            <div class="col-lg-4 col-xxl-4 mb-5">
                                <a class="nav-link" href="generate.php">
                                <div class="card bg-light" >
                                    
                                    <div class="row">
                                        <div class="col-md-3">
                                        <img class="img-fluid rounded mb-4 mb-lg-0" src="http://localhost/QR-main/assets/url%20(3).png" />
                                        </div>
                                        <div class="col-md-9">
                                            <p>
                                                <b>URL </b>
                                                All The Tools You'll Need To Be More Potential And Work Smart
                                            </p>
                                        
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-xxl-4 mb-5">
                                <a class="nav-link" href="generate.php">
                                <div class="card bg-light" >
                                    
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img class="img-fluid rounded mb-4 mb-lg-0" src="http://localhost/QR-main/assets/text.png" />
                                        </div>
                                        <div class="col-md-9">
                                            <p>
                                                <b>Text </b> 
                                                All The Tools You'll Need To Be More Potential And Work Smart
                                            </p>
                                        
                                        </div>
                                    </div>
                                </div>
                            </a>
                            </div>
                            <div class="col-lg-4 col-xxl-4 mb-5">
                                <a class="nav-link" href="generate.php">
                                <div class="card bg-light" >
                                    
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img class="img-fluid rounded mb-4 mb-lg-0" src="http://localhost/QR-main/assets/email%20(1).png" />
                                        </div>
                                        <div class="col-md-9">
                                            <p>
                                                <b>E-mail </b>
                                                All The Tools You'll Need To Be More Potential And Work Smart
                                            </p>
                                        
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-xxl-4 mb-5">
                                <a class="nav-link" href="generate.php">
                                <div class="card bg-light" >
                                    
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img class="img-fluid rounded mb-4 mb-lg-0" src="http://localhost/QR-main/assets/folder.png" />
                                        </div>
                                        <div class="col-md-9">
                                            <p>
                                                <b>File </b> 
                                                All The Tools You'll Need To Be More Potential And Work Smart
                                            </p>
                                        
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>                        
                            <div class="col-lg-4 col-xxl-4 mb-5">
                                <a class="nav-link" href="generate.php">
                                <div class="card bg-light" >
                                    
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img class="img-fluid rounded mb-4 mb-lg-0" src="http://localhost/QR-main/assets/wifi.png" />
                                        </div>
                                        <div class="col-md-9">
                                            <p>
                                                <b>Wifi </b>
                                                All The Tools You'll Need To Be More Potential And Work Smart
                                            </p>
                                        
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>                        
                            <div class="col-lg-4 col-xxl-4 mb-5">
                                <a class="nav-link" href="generate.php">
                                <div class="card bg-light" >
                                    
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img class="img-fluid rounded mb-4 mb-lg-0" src="http://localhost/QR-main/assets/sms.png" />
                                        </div>
                                        <div class="col-md-9">
                                            <p>
                                                <b>sms </b>
                                                All The Tools You'll Need To Be More Potential And Work Smart
                                            </p>
                                        
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                    <Link to ='/alltools'>
                    <a  class="btn btn-success">View All Tools</a> 
                    </Link>
                </div>

            
        </div>
    )
}
