import React from 'react'
import Navbar from '../Layouts/Navbar'
import './Aboutus.css'

function Aboutus() {
    return (
        <div>
            <Navbar/>


            <section className="about" data-aos="fade-up">
        <div className="containerabout">
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
              <p className="font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="icofont-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </section>
            
            <section className="facts section-bg" data-aos="fade-up">
            <div className="containerfacts">
            <div className="row counters">
            <div className="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">232</span>
              <p>Clients</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">521</span>
              <p>Projects</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">1,463</span>
              <p>Hours Of Support</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">15</span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </section>

        </div>
    )
}

export default Aboutus
