webpackJsonp([1],{119:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),c=a.n(o),s=a(38),l=a(120),u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"registro"},c.a.createElement("div",{className:"topHeader"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:"images/logo_blanco.png"})),c.a.createElement("div",{className:"button ingresar"},"Ingresar")),c.a.createElement("div",{className:"formRegistro"},c.a.createElement("div",{className:"logoVillas"},c.a.createElement("img",{src:"images/logoVillas.jpg"})),c.a.createElement("div",{className:"texto"},c.a.createElement("span",null,"Registrate para conocer m\xe1s acerca de tu vecindario y tener al dia las cuentas de tu administraci\xf3n")),c.a.createElement("div",{id:"controls"},c.a.createElement("div",{className:"imputsText"},c.a.createElement(l.a,{placeHolder:"Correo electr\xf3nico",type:"email"})),c.a.createElement("div",{className:"imputsText"},c.a.createElement(l.a,{placeHolder:"Nombre completo",type:"text"})),c.a.createElement("div",{className:"imputsText"},c.a.createElement(l.a,{placeHolder:"Tel\xe9fono",type:"text"})),c.a.createElement("div",{className:"imputsText"},c.a.createElement(l.a,{placeHolder:"Contrase\xf1a",type:"password"})),c.a.createElement("div",{className:"imputsText"},c.a.createElement(l.a,{placeHolder:"COnfirmar contrase\xf1a",type:"password"})),c.a.createElement("div",{className:"button registrar"},"Registrarse")),c.a.createElement("div",{className:"texto"},c.a.createElement("span",null,"Al registrarte aceptas las condiciones y nuestra politica de privacidad."))),c.a.createElement("div",{className:"formRegistro dos"},"\xbfYa tienes cuenta? solo inicia sesi\xf3n"))}}]),t}(o.Component),m=function(e){return{}},f=function(e){return{}};t.default=Object(s.b)(m,f)(p)},120:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=a(0),c=a.n(o),s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=function(e){function t(){var e,a,i,o;n(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return a=i=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.state={active:!1,visible:!1,type:i.props.type},i.handlerVisibility=function(){i.setState({visible:!i.state.visible}),i.state.visible?i.setState({type:"password"}):i.setState({type:"text"})},o=a,r(i,o)}return i(t,e),s(t,[{key:"onFocusHandler",value:function(e){this.setState({active:!0})}},{key:"onBlurHandler",value:function(e){""!==e.target.value?this.setState({active:!0}):this.setState({active:!1})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"wInputText"},c.a.createElement("p",{className:this.state.active?"placeholder active":"placeholder"},this.props.placeHolder),c.a.createElement("div",{className:this.state.active?"line active":"line"}),"password"===this.props.type?this.state.visible?c.a.createElement("i",{className:"icon material-icons",onClick:function(){return e.handlerVisibility()}},"visibility"):c.a.createElement("i",{className:"icon material-icons",onClick:function(){return e.handlerVisibility()}},"visibility_off"):null,c.a.createElement("input",{type:this.state.type,className:this.props.type,onFocus:function(t){return e.onFocusHandler(t)},onBlur:function(t){return e.onBlurHandler(t)}}))}}]),t}(o.Component);t.a=l}});
//# sourceMappingURL=1.b37b1d56.chunk.js.map