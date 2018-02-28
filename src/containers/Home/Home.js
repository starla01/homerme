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
          <Header />
          <Menu />
          <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
