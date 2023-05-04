import React from 'react';
import './xthree.css'

const ExtraSection2 = () => {
    return (
        <div>
        <div className="container px-1 px-md-4 py-5 mx-auto">
          <div className="card cardthree ">
            <div className="row d-flex justify-content-between px-3 top"></div>
  
            <div className="row d-flex justify-content-center">
              <div className="col-12">
                <ul id="progressbar" className="text-center">
                  <li className="active step0"></li>
                  <li className="active step0"></li>
                  <li className="active step0"></li>
                  <li className="step0"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ExtraSection2;