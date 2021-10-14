import React from 'react';
import Navbar from '../Navbar'
import data from '../Pt-Br'
import {Vega} from 'react-vega'
import myData from './vis-home.json'


class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title, 
            subtitle: this.props.subtitle, 
            text: this.props.miniText,
            textBtn: this.props.btnText
        }
    }
    
    render() { 
        return (
            <>  
            <Navbar
                navLink1={data.navLink1}
                navLink2={data.navLink2}
                navLink3={data.navLink3}
            />
            <section className="home">

                <div className="home_container">
                    <h1 id="home__title">{this.props.title}</h1>
                    <p id="home__subtitle">{this.props.subtitle}</p>
                    <div className="home__button__wrapper">
                        <button id="home__button">{this.props.btnText}</button>
                        <p>{this.props.miniText}</p>
                    </div>
                </div>

                <div className="grafo_container">
                    <Vega spec={myData} id="grafo"/>  
                </div>
                        

            </section>
           
        </>

        );
    }
}
 
export default Home;