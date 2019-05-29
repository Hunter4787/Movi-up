import React, { Component } from 'react';
import './App.css';


/*component*/
import Header from './header'
import MoviListe from './mainliste'


const movieListe = [
  {
    rating:" 3",
    tof:require("./guan yu.jpg"),
    title: "Guan yu & CaoCao"
  },
  {
    rating: "4",
    tof:require("./300poster.jpg"),
    title: "guuuul 300!"
  },
  {
    rating: "3",
    tof:require("./The_Maze.jpg"),
    title: "The Maze Runner "
  },
  {
    rating: "5",
    tof:require("./The_Maze.jpg"),
    title: "The Maze Runner "
  }
]
class App extends React.Component {
  constructor(props){
    super(props)
      this.state={
   news:movieListe ,
   filtred:movieListe,
   finalfilter:movieListe
   
   
      }
    }
  search(keyword){
    let filter1=this.state.finalfilter.filter((el,i)=>{return el.title.toLowerCase().indexOf(keyword.toLowerCase())>-1})
    this.setState({filtred:filter1, finalfilter:filter1})
    
  }
  ratesearch = (keyrate)=>{
    let filter1=this.state.filtred.filter((el,i)=>{return el.rating.indexOf(keyrate)>-1} )
    this.setState({finalfilter:filter1})
   
  }
  
 render(){ 
   return (
    <div>
      <Header searchname={(keyword)=>this.search(keyword)} searchrate={(keyword)=>this.ratesearch(keyword)}/>
      <MoviListe liste={this.state.finalfilter}/>
    </div>
  );}
}

export default App;
