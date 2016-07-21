import React from 'react'

const Login = (props) => {

    console.log(props);

   return (
    <div>
        <h1>{props.userDetails}</h1>
    </div>
    )
}

export default Login
