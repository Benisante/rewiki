import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

 class re4 extends Component {
  state={
    residentEvil4:{},
    dataready:false
  }
    componentDidMount=()=>{
      axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games/resident-evil-4",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key":"8973ad755emsh3a05788bfbba4f9p1c697bjsn500019fa05d0"
            }
            })
            .then((response)=>{
              this.setState({
                residentEvil4:response.data,
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
      <div className="content2"><h1>{this.state.residentEvil4.name} ({this.state.residentEvil4.released.slice(0, 4)})</h1> 
      {this.state.residentEvil4.description_raw.slice(330,657)}
      <p>Achivements: {this.state.residentEvil4.achievements_count}</p>
      <p>Available on:</p>
      <button><Link to="/main">&laquo; Back</Link></button>

      </div>
      
      <video autoPlay muted loop id="myVideo">
          <source src={this.state.residentEvil4?.clip?.clip} type="video/mp4"/>
      </video>
      </div>):<img src="./images/jill.gif" alt="loading"/>}
     
      </div>
    );
  }
}

export default re4;