import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
const Serie = () => {
  return (
    <div>
    <div id="layout-wrapper">
          <Header />
          <Navbar />
          {/* Start right Content here */}
          <div className="main-content">
            <div className="page-content">
              <div className="container-fluid">
                {/* Start page title */}
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                      <h4 className="mb-0">Application Localisation des restaurants</h4>
                      <div className="page-title-right">
                        
                      </div>
                    </div>
                  </div>
                </div>
                {/* End page title */}
                <div className="row">
                  
                 
                  
                  <div className="col-xl-12">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="card">
                          <div className="card-body">
                           
                            <div className="col-lg-12">
                                <div className="mt-4 mt-xl-0">
                                    <form>                                
                                    <div className="row">
                                        <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="formrow-email-input">
                                            Ajoutre Une Serie :
                                            </label>
                                            <input
                                            type="nom"
                                            className="form-control"
                                            placeholder="Serie..."
                                            id="formrow-email-input"
                                            />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button type="submit" className="btn btn-primary w-md">
                                        Ajouter
                                        </button>
                                    </div>
                                    </form>
                                    <div>
      <br/>
      <div className="table-responsive">
        <table className="table table-nowrap table-hover mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Serie</th>
              <th scope="col">Modifier</th>
              <th scope="col">Supprimer</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">01</th>
              <td><a href="#" className="text-dark">KFC</a></td>
              <td>
              M 
              </td>
              <td>
              S
              </td>
             
            </tr>
        

            
          </tbody>
        </table>
      </div>
    </div>
                                </div>
                                </div>
    
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End container-fluid */}
            </div>
            {/* End Page-content */}
            <Footer />
          </div>
          {/* End main content */}
        </div>
    
    
        </div>
  )
}

export default Serie