import React from 'react';
import './App.css';

/*component*/
import Header from './header'
import MoviListe from './mainliste'
import Stars from './stars'

const movieListe = [
  {
    rating: 3,
    tof: require("./guan yu.jpg"),
    title: "Guan yu & CaoCao"
  },
  {
    rating: 4,
    tof: require("./300poster.jpg"),
    title: "guuuul 300!"
  },
  {
    rating: 2,
    tof: require("./Prince_of_Persia.jpg"),
    title: "Prince_of_Persia"
  },
  {
    rating: 1,
    tof: require("./TMNT.jpg"),
    title: "TMNT"
  },
  {
    rating: 3,
    tof: require("./The_Maze.jpg"),
    title: "The Maze Runner "
  },
  {
    rating: 5,
    tof: require("./The_Maze.jpg"),
    title: "The Maze Runner "
  }
]
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filtred: movieListe,
      rating: 1,
      title: "",
      isLoading:true

    }
  }
  search = (keyword) => {
    this.setState({ title: keyword })
    this.setState({
      filtred: movieListe.filter((el, i) => {
        return (el.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1) && (el.rating >= this.state.rating)
      })
    })
  }

  ratesearch = (k) => {
    this.setState({ rating: k })
    this.setState({
      filtred: movieListe.filter((el, i) => {
        return (el.rating >= k) && (el.title.toLowerCase().indexOf(this.state.title) > -1)
      })
    })
  }
  defaultRates = () => {
    this.setState({ rating: 0, filtred: movieListe })
  }

  newMovie = (r, tof, title) => {
    // this.setState({ filtred: [...this.state.filtred,{ rating: r, tof: tof, title: title }] })
    this.setState({ filtred: this.state.filtred.concat([{ rating: r, tof: tof, title: title }])})

  }
  componentDidMount(){
    setTimeout(()=>this.setState({isLoading:false}), 3000);
  }
  render() {
    return (
      <div>
        <Header searchname={(keyword) => this.search(keyword)} default={() => this.defaultRates()} />
        <Stars searchrate={(y) => this.ratesearch(y)} liste={movieListe} />
        <MoviListe liste={this.state.filtred} newMovie={this.newMovie} isLoading={this.state.isLoading}/>
      </div >
    );
  }
}

export default App;
