import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginRequest } from '../actions/';

import '../assets/styles/components/Login.scss';

import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';


const Login = props => {
    const [ form, setValues ] = useState({
        email: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();

        props.loginRequest(form);
        props.history.push('/');
    }

    const handlePushHome = () => {
        props.history.push('/')
    }

    return (
        <section className="login">
            <section className="login__container">
            <h2>Inicia sesión</h2>
            <form className="login__container--form" onSubmit={handleSubmit}>
                <input 
                    className="input" 
                    name="email"
                    type="text" 
                    placeholder="Correo"
                    onChange={handleInput}
                />
                <input 
                    className="input" 
                    name="password"
                    type="password" 
                    placeholder="Contraseña"
                    onChange={handleInput}
                />
                <button onClick={handlePushHome} className="submit">Iniciar sesión</button>
                <div className="login__container--remember-me">
                <label>
                    <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
                </label>
                <Link to="/">Olvidé mi contraseña</Link>
                </div>
            </form>
            <section className="login__container--social-media">
                <div><img src={googleIcon} /> Inicia sesión con Google</div>
                <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
            </section>
            <p className="login__container--register">No tienes ninguna cuenta
                <Link to="/register">
                    Regístrate
                </Link> 
            </p>
            </section>
        </section>
    );
}
    
const mapDispatchToProps = {
    loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);