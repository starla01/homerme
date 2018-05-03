import React, { Component } from 'react';

class InputText extends Component {
	state = {
		active: false,
		visible: false,
		type: this.props.type
	}
	// componentDidCatch = (error, info) => {
	// 	this.setState({hasError: true, errorMessage: error});
	// }
	onFocusHandler(e) {
		this.setState({active: true})
	}
	onBlurHandler(e) {
		e.target.value !== '' ? this.setState({active: true}) : this.setState({active: false})
	}

	handlerVisibility = () => {
		this.setState({visible: !this.state.visible})
		this.state.visible ? this.setState({type: 'password'}) : this.setState({type: 'text'})
	}
    render() {
        return (
			<div className="wInputText">
				<p className={this.state.active ? 'placeholder active' : 'placeholder'}>{this.props.placeHolder}</p>
				<div className={this.state.active ? 'line active' : 'line'}></div>
				{ this.props.type === 'password' ? this.state.visible ? <i className="icon material-icons" onClick={() => this.handlerVisibility() }>visibility</i> : <i className="icon material-icons" onClick={() => this.handlerVisibility() }>visibility_off</i> : null}
				<input
					type={this.state.type}
					className={this.props.type}
					onFocus={ (event) => this.onFocusHandler(event)}
					onBlur={(event) => this.onBlurHandler(event)}
				/>
			</div>
		)
    }
}

export default InputText;