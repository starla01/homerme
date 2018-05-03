import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../components/Controls/inputText.js';

class Login extends Component {
  render() {
    return (
      <div className="login">
          <div className="formLogin">
				<div className="image">
					<h1 className="title">¡Bienvenido!</h1>
					<p className="text">Ingresa con usuario, Facebook o Google</p>
					<img src="/images/lalaland.jpg" />
					
				</div>
				<div className="form">
					<div className="logo">
						<img src="/images/logo.png" />
					</div>
					<div className="imputsText">
						<InputText placeHolder="Correo" type="email" />
					</div>
					<div className="imputsText">
					<InputText placeHolder="Contraseña" type="password" />
					</div>
					<div className="separate"><span>ó</span></div>
					<div className="imputsText">
						<div className="button facebook"> 
							Ingresa con Facebook
						</div>
					</div>
					<div className="imputsText">
						<div className="button google">
							Ingresa con Google
						</div>
					</div>
					<p class="passLink">Reestablecer mi contraseña</p>
				</div>
		  </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
