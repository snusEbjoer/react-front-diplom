import { useNavigate } from "react-router-dom"

function Profile() {
  const navigate = useNavigate()
  const navigateToChat = (e) => {
    e.preventDefault()
    navigate('/chat')
  }
  return (
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <link href="https://unpkg.com/@webpixels/css/dist/index.css" rel="stylesheet"></link>
      <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 py-lg-0 navbar-light bg-light border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
        <div className="container-fluid">
          <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand py-lg-5 mb-lg-5 px-lg-6 me-0" href="#">
            <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="..."/>
          </a>
          <div className="navbar-user d-lg-none">
            <div className="dropdown">
              <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="avatar-parent-child">
                  <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar- rounded-circle"/>
                  <span className="avatar-child avatar-badge bg-success"></span>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                <a href="#" className="dropdown-item">Profile</a>
                <a href="#" className="dropdown-item">Settings</a>
                <a href="#" className="dropdown-item">Billing</a>
                <hr className="dropdown-divider"/>
                <a href="#" className="dropdown-item">Logout</a>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="sidebarCollapse">
            <form className="mt-4 mb-3 d-none">
              <div x-data="{focused: false}">
                <div className="input-group input-group-sm">
                  <span className="input-group-text border-end-0 rounded-left-pill" id="basic-addon1">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                      <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                    </svg>
                  </span>
                  <input type="text" className="form-control border-left-0 ps-0 rounded-end-pill" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-house"></i> Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={navigateToChat}>
                  <i className="bi bi-bar-chart"></i> Chat
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-chat"></i> Messages
                  <span className="badge bg-opacity-30 bg-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-bookmarks"></i> Collections
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-people"></i> Users
                </a>
              </li>
            </ul>
            <hr className="navbar-divider my-5 opacity-20"/>
            <ul className="navbar-nav mb-md-4">
              <li>
                <span className="nav-link text-xs font-semibold text-uppercase text-muted ls-wide" href="#">
                  Teams
                </span>
              </li>
              <li className="">
                <a className="nav-link text-sm font-semibold" href="#">
                  <span className="w-2 h-2 rounded-circle me-3 bg-primary"></span>Marketing
                </a>
              </li>
              <li className="">
                <a className="nav-link text-sm font-semibold" href="#">
                  <span className="w-2 h-2 rounded-circle me-3 bg-warning"></span>Development
                </a>
              </li>
              <li className="">
                <a className="nav-link text-sm font-semibold" href="#">
                  <span className="w-2 h-2 rounded-circle me-3 bg-success"></span>Design
                </a>
              </li>
              <li className="">
                <a className="nav-link text-sm font-semibold" href="#">
                  <span className="w-2 h-2 rounded-circle me-3 bg-tertiary"></span>Social Media
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        <header className="bg-surface-primary border-bottom pt-6">
          <div className="container-fluid">
            <div className="mb-npx">
              <div className="row align-items-center">
                <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                  <h1 className="h2 mb-0 ls-tight">Account Settings</h1>
                </div>
                <div className="col-sm-6 col-12 text-sm-end">
                  <div className="mx-n1">
                    <a href="#" className="btn d-inline-flex btn-sm btn-neutral mx-1">
                      <span className=" pe-2">
                        <i className="bi bi-pencil"></i>
                      </span>
                      <span>Edit</span>
                    </a>
                    <a href="#" className="btn d-inline-flex btn-sm btn-primary mx-1">
                      <span className=" pe-2">
                        <i className="bi bi-plus"></i>
                      </span>
                      <span>Create</span>
                    </a>
                  </div>
                </div>
              </div>
              <ul className="nav nav-tabs mt-4 overflow-x border-0">
                <li className="nav-item ">
                  <a href="#" className="nav-link active">All files</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link font-regular">Shared</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link font-regular">File requests</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <main className="py-6 bg-surface-secondary">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-7 mx-auto">
                <div className="card shadow border-0 mt-4 mb-10">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="d-flex align-items-center">
                          <a href="#" className="avatar avatar-lg bg-warning rounded-circle text-white">
                            <img alt="..." src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"/>
                          </a>
                          <div className="ms-4">
                            <span className="h4 d-block mb-0">Julianne Moore</span>
                            <a href="#" className="text-sm font-semibold text-muted">View Profile</a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-auto">
                        <button type="button" className="btn btn-sm btn-neutral">Upload</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="mb-0">Contact Information</h5>
                </div>
                <form className="mb-6">
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <div className="">
                        <label className="form-label" for="first_name">First name</label>
                        <input type="text" className="form-control" id="first_name"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <label className="form-label" for="last_name">Last name</label>
                        <input type="text" className="form-control" id="last_name"/>
                      </div>
                    </div>
                  </div>
                  <div className="row g-5">
                    <div className="col-md-6">
                      <div className="">
                        <label className="form-label" for="email">Email</label>
                        <input type="email" className="form-control" id="email"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <label className="form-label" for="phone_number">Phone number</label>
                        <input type="tel" className="form-control" id="phone_number"/>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="">
                        <label className="form-label" for="address">Address</label>
                        <input type="text" className="form-control" id="address"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <label className="form-label" for="city">City</label>
                        <input type="text" className="form-control" id="city"/>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="">
                        <label className="form-label" for="country">Country</label>
                        <select className="form-select" id="country" placeholder="Your email" aria-label="Default select example">
                          <option selected>Country</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="">
                        <label className="form-label" for="zip">ZIP</label>
                        <input type="tel" className="form-control" id="zip"/>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="check_primary_address" id="check_primary_address"/>
                        <label className="form-check-label" for="check_primary_address">
                          Make this my default address
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <button type="button" className="btn btn-sm btn-neutral me-2">Cancel</button>
                    <button type="submit" className="btn btn-sm btn-primary">Save</button>
                  </div>
                </form>
                <hr className="my-10" />
                <div className="row g-6">
                  <div className="col-md-6">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <h5 className="mb-2">Public profile</h5>
                        <p className="text-sm text-muted mb-6">
                          Making your profile public means that anyone on the network will be able to find you.
                        </p>
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <h5 className="mb-2">Show my email</h5>
                        <p className="text-sm text-muted mb-6">
                          Showing your e-mail adresses means that anyone on the network will be able to find you.
                        </p>
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card shadow border-0">
                      <div className="card-body d-flex align-items-center">
                        <div>
                          <h5 className="text-danger mb-2">Deactivate account</h5>
                          <p className="text-sm text-muted">
                            Once you delete your account, there is no going back. Please be certain.
                          </p>
                        </div>
                        <div className="ms-auto">
                          <button type="button" className="btn btn-sm btn-danger">Deactivate</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Profile
