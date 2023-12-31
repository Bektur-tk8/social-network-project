import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        .then(response => {
           if(response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            this.props.setUserAuth(id, email, login)
           }
        });
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setUserAuth: (data) => {
            dispatch(setAuthUserData(data))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (HeaderContainer);