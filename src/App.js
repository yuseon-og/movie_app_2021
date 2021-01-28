// const foodILike=[
//   {
//     id:1,
//     name:"kimchi",
//     image:"https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2018/11/06/20181106000941_0.jpg",
//     rating: 5
//   },
//   {
//     id:2,
//     name:"porkbelly",
//     image:"https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG",
//     rating: 4.7
//   },
//   {
//     id:3,
//     name:"bibimbap",
//     image:"https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2019/05/15/69fef116645e4a60899712b7e2fd42b7_hangookguan3-1-1030x773.jpg",
//     rating: 4.5
//   },
//   {
//     id:4,
//     name:"sushi",
//     image:"https://resources.matcha-jp.com/old_thumbnails/720x2000/1529.jpg",
//     rating: 4.4
//   },
//   {
//     id:5,
//     name:"ramen",
//     image:"https://img.hani.co.kr/imgdb/resize/2012/0806/8000971505_20120806.JPG",
//     rating: 4.3
//   },
// ];

// function Food({name, picture, rating}) {

//   return<div>

//     <h2> i like {name}</h2>
//     <h4>{rating}/5.0</h4>
//     <img src = {picture} alt={name}></img>
//   </div>
// }

// Food.propTypes={
//   name:PropTypes.string.isRequired,
//   picture:PropTypes.string.isRequired,
//   rating:PropTypes.number.isRequired

// };

// 연습할때 App 클래스 내부에 있던놈들

// constructor(props) {
//   super(props);
//   console.log("constructor");
// }
// state = {
//   count: 2,
// };

// add = () => {
//   this.setState((cur) => ({ count: cur.count + 1 }));
// };
// minus = () => {
//   this.setState((cur) => ({ count: cur.count - 1 }));
// };

// componentDidMount() {
//   console.log("did Monut");
// }

// componentDidUpdate() {
//   console.log("did update");
// }

// componentWillUnmount() {
//   console.log("goodbye");
// }

// <h1> the number is : {this.state.count}</h1>
// <button onClick={this.add}>Add</button>
// <// setTimeout(() => {
//   this.setState({ isLoading: false });
// }, 3000);button onClick={this.minus}>Minus</>

import React from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        <div>
          {isLoading
            ? "Loading..."
            : movies.map((movie) => {
                console.log(movie);
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                  />
                );
              })}
        </div>
      </div>
    );
  }
}

export default App;
