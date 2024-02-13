import React from 'react';
import contactIcon from "../../assets/contact-img.png";

const Contacts = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact3 py-5">
      <div className="container">
        <div className="row justify-content-center"> 
          <div className="col-lg-6"> 
            <div className="contact-box ml-3">
              <h1 className="font-weight-light mt-2">Contact me <img src={contactIcon} alt="contact-icon" height={50} width={50} /></h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input className="form-control" type="text" placeholder="name" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input className="form-control" type="email" placeholder="email address" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input className="form-control" type="text" placeholder="phone" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <textarea className="form-control" rows="3" placeholder="message"></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mt-4 border-0 mb-4">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="card-body d-flex align-items-center c-detail pl-0">
                    <div className="mr-3 align-self-center">
                      <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt="Address Icon" />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">Address</h6>
                      <p className="">601 Sherwood Ave.<br /> San Bernandino</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mr-3 align-self-center">
                      <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" alt="Phone Icon" />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">Phone</h6>
                      <p className="">+359898638967</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mr-3 align-self-center">
                      <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" alt="Email Icon" />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">Email</h6>
                      <p className="">
                        valentingg1997@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;



