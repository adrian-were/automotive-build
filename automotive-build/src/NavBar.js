import './App.css'
function NavBar () {
return (

    
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    

    <a class="navbar-brand m-4" href="#">CarCo</a>

    <button
      data-mdb-collapse-init
      class="navbar-toggler"
      type="button"
      data-mdb-target="#navbarRightAlignExample"
      aria-controls="navbarRightAlignExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarRightAlignExample">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item me-5">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item me-5">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item me-5">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item me-5">
          <a class="nav-link" href="#">Contacts</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

)
}
export default NavBar  