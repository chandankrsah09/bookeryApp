import React from "react";

function Contact() {
  return (
    <>
      <div className="flex h-screen items-center justify-center flex-col gap-3">
        <div className=" ">
            <h1>Contacts</h1>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control border-2 border-indigo-600" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control border-2 border-indigo-600"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control border-2 border-indigo-600" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </>
  );
}

export default Contact;
