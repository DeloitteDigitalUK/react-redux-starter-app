import { connect } from 'react-redux'
import { userLogin } from '../modules/login'

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */

import Login from 'components/Login'

/*  Object of action creators (can also be function that returns object).
 Keys will be passed as props to presentational components. Here we are
 implementing our wrapper around increment; the component doesn't care   */

const mapActionCreators = {
    userLogin: () => userLogin('john')
}

const mapStateToProps = (state) => ({
    userDetails: 'john'
})



export default connect(mapStateToProps, mapActionCreators)(Login)
