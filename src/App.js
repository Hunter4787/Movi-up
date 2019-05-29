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
   filtred:movieListe
   
   
      }
    }
  search(keyword){
    let filter1=this.state.news.filter((el,i)=>{return el.title.toLowerCase().indexOf(keyword)>-1})
    this.setState({filtred:filter1})
    
  }
  ratesearch = (keyrate)=>{
    let filter2=this.state.news.filter((el,i)=>{return el.rating.indexOf(keyrate)>-1} )
    this.setState({filtred:filter2})
   
  }
  
  // this.setState({mixfilter: this.state.filtred.concat(this.state.ratefilter)})
 render(){ 
   return (
    <div>
      <Header searchname={(keyword)=>this.search(keyword)} searchrate={(keyword)=>this.ratesearch(keyword)}/>
      <MoviListe liste={this.state.filtred}/>
    </div>
  );}
}

export default App;
