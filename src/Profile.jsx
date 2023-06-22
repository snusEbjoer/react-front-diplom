import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'


function Profile() {
  const navigate = useNavigate()
  const navigateToChat = (e) => {
    e.preventDefault()
    navigate('/chat')
  }
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIyMkBtYWlsLnJ1IiwiaWQiOjE5LCJpYXQiOjE2ODQyMTU2NjR9.fPBYulD22RXNxKC89xLyzEYRdUAIR4BCGOAauJ1FhQw"
  const [data, setData] = useState({
      email: "",
      password: "",
      fio: ""
    });
    const [agent, setAgent] = useState([{
      fio:"",
      email:""
    }])
    const [fio, setFio] = useState('')

  const handleChange = (e) => {
      const value = e.target.value;
      setData({
        ...data,
        [e.target.name]: value
      });
    };
    
    const CreateAgent = (e) => {
      e.preventDefault();
      const userData = {
        email: data.email,
        password: data.password,
        fio:data.fio
      };
      axios.post('https://diplomchat.site/users/createAgent', userData, {headers: {Authorization : `Bearer ${accessToken}`}})
      .then(function (response) {
          console.log(response.status, response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      }

    const GetMe = () => {
      axios.get('https://diplomchat.site/users/me', {headers: {Authorization : `Bearer ${accessToken}`}})
      .then(function (response) {
          console.log(response.status, response.data.fio);
          setFio(response.data.fio)
        })
        .catch(function (error) {
          console.log(error);
        });
      }

      const GetAgents = () => {
        axios.get('https://diplomchat.site/users/agents', {headers: {Authorization : `Bearer ${accessToken}`}})
      .then(function (response) {
          console.log(response.status, response.data);
          setAgent(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
      }

      GetMe()
  return (
      
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <link href="https://unpkg.com/@webpixels/css/dist/index.css" rel="stylesheet"></link>
      <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 py-lg-0 navbar-light bg-light border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
        <div className="container-fluid">
          <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand py-lg-5 mb-lg-5 px-lg-6 me-0" href="#">
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
                      <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                      <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
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
                            <img alt="..." src="https://i2.wp.com/fnewshub.com/wp-content/uploads/2021/10/IMG_20211024_002834.jpg"/>
                          </a>
                          <div className="ms-4">
                            <span className="h4 d-block mb-0">{fio}</span>
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
                  <h5 className="mb-0">Добавить агента</h5>
                </div>
                <form className="mb-6">
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <div className="">
                        <label className="form-label" >Email</label>
                        <input type="text" className="form-control" name="email" id="email" value={data.email} onChange={handleChange}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <label className="form-label" >Password</label>
                        <input type="password" className="form-control" name="password" id="password" value={data.password} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <label className="form-label" >ФИО</label>
                        <input type="text" className="form-control" name="fio" id="fio" value={data.fio} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <button type="button" className="btn btn-sm btn-neutral me-2">Cancel</button>
                    <button type="button" className="btn btn-sm btn-primary" onClick={CreateAgent}>Save</button>
                    <button type="button" className="btn btn-sm btn-primary" onClick={GetAgents}>Show agents</button>
                  </div>
                </form>
                <hr className="my-10" />
                <div className="row g-6">
                  <div className="col-md-6">
                  {agent.map(a => (<div className="card shadow border-0">
                      <div className="card-body">
                        <h5 className="mb-2" key={a.fio}>{a.fio}</h5>
                        <p className="text-sm text-muted mb-6" key={a.email}>
                          {a.email}
                        </p>
                      </div>
                      </div>))}
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
