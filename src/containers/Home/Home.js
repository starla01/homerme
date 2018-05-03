import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './home.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        
         <div className={classes.imageBack}>
            <img src="/images/makeahome.jpg" />
         </div>
         <div className={classes.titles}>
          <h2>Estamos construyendo tu sitio</h2>
          <h1>villasdetonanitla.com</h1>
          <img src="images/logo.png" width="10%"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
