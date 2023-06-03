import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          2023 &copy; Emsi ALR.
        </div>
        <div className="col-sm-6">
          <div className="text-sm-end d-none d-sm-block">
          Application Localisation des restaurants  by{' '}
            <a href="#" target="_blank" className="text-reset">
              Mejbar
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer