import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

 class rerev2 extends Component {
  state={
    residentEvilrev2:{},
    dataready:false
  }
    componentDidMount=()=>{
      axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games/resident-evil-revelations-2-episode-one",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key":"8973ad755emsh3a05788bfbba4f9p1c697bjsn500019fa05d0"
            }
            })
            .then((response)=>{
              this.setState({
                residentEvilrev2:response.data,
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
      <div className="content2">
      <h1>{this.state.residentEvilrev2.name.slice(0,28)} ({this.state.residentEvilrev2.released.slice(0,4)})</h1> 
      {this.state.residentEvilrev2.description_raw.slice(0,370)}
      <p>Achivements: {this.state.residentEvilrev2.achievements_count}</p>
      <p>Available on:</p>

      <button><Link to="/side">&laquo; Back</Link></button>
      </div>
      
      <video autoPlay muted loop id="myVideo">
          <source src="./videos/rerev2.mp4" type="video/mp4"/>
      </video>
      </div>):<img src="./images/jill.gif" alt="loading"/>}
     
      </div>
    );
  }
}

export default rerev2;