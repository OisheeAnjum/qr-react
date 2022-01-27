import React from 'react'
import {Link} from 'react-router-dom';

export const Hero = () => {

    return (
<div class="container px-4 px-lg-5">
<div class="row gx-4 gx-lg-5 align-items-center my-5">
    <div class="col-lg-6">
        <h2 class="font-weight-light text-capitalize" >we make qr code </h2>
        <h1 class="font-weight-light text-capitalize">meaningful</h1>
        <p class="fs-4">All The Tools You'll Need To Be More Potential And Work Smart</p>
        <Link to ='/alltools'>
        <a id="nav" class="btn btn-primary btn-lg">Explore All Tools</a>
        </Link>
    </div>
    <div class="col-lg-6">
        <img class="img-fluid rounded mb-4 mb-lg-0" src="./images/QR Code (2).gif" />
    </div>
</div>
</div>
    )
}
