import React from "react";

const Profile = () => {
  return (
    <div className="mt-5" style={{ width: "60%", margin: "0 auto" }}>
      <h2 className="title text-center mt-5">UserProfile</h2>
      <form>
          <div className="form-group avatar">
            <figure className="figure col-md-2 col-sm-3 col-xs-12">
              <img
                className="img-responsive"
                src="https://source.unsplash.com/random/200x200"
                alt=""
              />
            </figure>
            <div className="form-inline col-md-10 col-sm-9 col-xs-12">
              <input type="file"/>
              <button
                type="submit"
                className="btn btn-sm btn-success"
              >
                Update Image
              </button>
            </div>
          </div>
          <h3 className="fieldset-title text-center mt-5">Personal Info</h3>
          <div className="form-group">
            <label className="col-md-2 col-sm-3 col-xs-12 control-label">
              User Name
            </label>
            <div className="col-md-10 col-sm-9 col-xs-12">
              <input type="text" className="form-control" value="ME" />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 col-sm-3 col-xs-12 control-label">
              First Name
            </label>
            <div className="col-md-10 col-sm-9 col-xs-12">
              <input type="text" className="form-control" value="You" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 col-sm-3 col-xs-12 control-label">
              Last Name
            </label>
            <div className="col-md-10 col-sm-9 col-xs-12">
              <input type="text" className="form-control" value="He" />
            </div>
          </div>
          <hr />
          <h3 className="fieldset-title text-center">Contact Info</h3>
          <div className="form-group">
            <label className="col-md-2  col-sm-3 col-xs-12 control-label">
              Email
            </label>
            <div className="col-md-10 col-sm-9 col-xs-12">
              <input
                type="email"
                className="form-control"
                value="we@gmail.com"
              />
              <p className="help-block">This is the email </p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2  col-sm-3 col-xs-12 control-label">
              Github
            </label>
            <div className="col-md-10 col-sm-9 col-xs-12">
              <input type="text" className="form-control" value="@She" />
              <p className="help-block">Your twitter username</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2  col-sm-3 col-xs-12 control-label">
              Linkedin
            </label>
            <div className="col-md-10 col-sm-9 col-xs-12">
              <input
                type="url"
                className="form-control"
                value="https://www.linkedin.com"
              />
              <p className="help-block">
                eg. https://www.linkedin.com/in/yourname
              </p>
            </div>
          </div>
        <hr />
        <div className="form-group">
          <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
            <input
              className="btn btn-primary"
              type="submit"
              value="Update Profile"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
