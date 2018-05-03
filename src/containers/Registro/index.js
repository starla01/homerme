import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../components/Controls/inputText.js';

class Registro extends Component {
  render() {
    return (
      	<div className="registro">
			<div className="topHeader">
				<div className="logo">
					<img src="images/logo_blanco.png" />
				</div>
				<div className="button ingresar">Ingresar</div>
			</div>
			<div className="formRegistro">
				<div className="logoVillas">
					<img src="images/logoVillas.jpg" />
				</div>
				<div className="texto">
					<span>Registrate para conocer más acerca de tu vecindario y tener al dia las cuentas de tu administración</span>
				</div>
				<div id="controls">
					<div className="imputsText">
						<InputText placeHolder="Correo electrónico" type="email" />
					</div>
					<div className="imputsText">
						<InputText placeHolder="Nombre completo" type="text" />
					</div>
					<div className="imputsText">
						<InputText placeHolder="Teléfono" type="text" />
					</div>
					<div className="imputsText">
						<InputText placeHolder="Contraseña" type="password" />
					</div>
					<div className="imputsText">
						<InputText placeHolder="COnfirmar contraseña" type="password" />
					</div>
					<div className="button registrar">
						Registrarse
					</div>
				</div>
				<div className="texto">
					<span>Al registrarte aceptas las condiciones y nuestra politica de privacidad.</span>
				</div>
			</div>
			<div className="formRegistro dos">
				¿Ya tienes cuenta? solo inicia sesión
			</div>
      	</div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Registro);
