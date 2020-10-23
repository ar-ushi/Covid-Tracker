import React, { Component } from 'react';
import Cards from './components/Cards/Cards';
import Charts  from './components/Chart/Charts';
import Countries from './components/Countries/Countries';
import styles from './App.module.css';
import {getData} from './api/index';
import image from './images/image.png';

class App extends Component{
    //bringing data to the our functional components
    state = {
        data : {},
        country: '',
    }
    
    handleCountryChange = async(country) => {
        const data = await getData(country);
        this.setState({data,country : country});
        //fetch data & set state
    }
    render() {
      const {data,country} = this.state;
      return(
          <div className={styles.container}>
              <img className={styles.image} src={image} alt="COVID-19" />
              <Cards data ={data} />
              <Countries handleCountryChange = {this.handleCountryChange}/>
              <Charts data={data} country={country}/>
          </div>
      );
  }
}

export default App;
