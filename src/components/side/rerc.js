import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

 class rerc extends Component {
  state={
    residentEvilrc:{},
    dataready:false
  }
    componentDidMount=()=>{
      axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games/resident-evil-operation-raccoon-city-2",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key":"8973ad755emsh3a05788bfbba4f9p1c697bjsn500019fa05d0"
            }
            })
            .then((response)=>{
              this.setState({
                residentEvilrc:response.data,
                dataready:true
              })
              console.log(response)
            })
            .catch((error)=>{
              console.log(error)
            })
    }
    
    render() {
    return (
        
      <div>
      {this.state.dataready?(<div className="content"> 
      <div className="content2"><h1>{this.state.residentEvilrc.name} ({this.state.residentEvilrc.released.slice(0, 4)})</h1> 
      {this.state.residentEvilrc.description_raw.slice(0,801)}
      <p>Achivements: {this.state.residentEvilrc.achievements_count}</p>
      <p>Available on:</p>
     
      <button><Link to="/side">&laquo; Back</Link></button>
      </div>
      
      <video autoPlay muted loop id="myVideo">
          <source src="./videos/city.mp4" type="video/mp4"/>
      </video>
      </div>):<img src="./images/jill.gif" alt="loading"/>}
     
      </div>
    );
  }
}

export default rerc;