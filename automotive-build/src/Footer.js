import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer(){
return (

<div class="container my-5">

  <footer class="text-white text-center text-lg-start bg-dark">
    
    <div class="container p-4">
      
      <div class="row mt-4">
        
        <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">About company</h5>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti.
          </p>

          <p>
            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias.
          </p>

          <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
    <FontAwesomeIcon icon={faFacebook} beat />
    </button>
    <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
    <FontAwesomeIcon icon={faInstagram} beat />
    </button>
    <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
    <FontAwesomeIcon icon={faWhatsapp} beat />
    </button>
    <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
    <FontAwesomeIcon icon={faTwitter} beat />
    </button>
        </div>

        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4 pb-1">Contact</h5>

          <ul class="fa-ul">
            <li class="mb-3">
              <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">Nairobi, 00-967, Kenya</span>
            </li>
            <li class="mb-3">
              <span class="fa-li"><i class="fas fa-envelope"></i></span><span class="ms-2">carcoautos@gmail.com</span>
            </li>
            <li class="mb-3">
              <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+254 122 100 200</span>
            </li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Opening hours</h5>

          <table class="table text-center text-white">
            <tbody class="fw-normal">
              <tr>
                <td>Monday - Friday:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Saturday:</td>
                <td>8am - 2pm</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 3pm</td>
              </tr>
            </tbody>
          </table>
        </div>
       
      </div>
    
    </div>

    <div class="text-center p-3">
      © 2025 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">Carco.com</a>
    </div>
    
  </footer>

</div>

)
}
export default Footer;
