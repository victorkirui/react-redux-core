import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetch_user_request } from "../redux/users/userActions";

const UserContainer = ({ userdata, fetch_user_request }) => {
  useEffect(() => {
    fetch_user_request();
  }, []);

  return userdata.loading ? (
    <h2>Loading</h2>
  ) : userdata.error ? (
    <h2>{userdata.error}</h2>
  ) : (
    <div>
      <h2>List of Users</h2>
      <div>
        {userdata &&
          userdata.users &&
          userdata.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userdata: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_user_request: () => dispatch(fetch_user_request()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
