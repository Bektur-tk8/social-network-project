import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfileAC } from "../../redux/profile-reducer";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {    
    
        // let profileId = this.props.router.params.profileId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2` )
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));