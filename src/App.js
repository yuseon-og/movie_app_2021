import React from 'react';
// import PropTypes from 'prop-types';



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

class App extends React.Component{
  state = {
    count : 0
  }

 add()  {
  // return this.setState({count:1})
return this.setState({count:1})
  console.log("object")
}
//  add=()=> {
//         this.setState( cur =>({count: cur.count+1}))
//   };
  minus = ()=>{
    this.setState( cur =>({count: cur.count-1}))
  };

  render(){
    return (
   <div>
    <h1> the number is : {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}


export default App;


// thanks for the great lecture Nico!

// i have a question about function expression.

// you use arrow function to make method add() to use "setState" inside of the class "App"
// add=()=> {
//   this.setState({count:1})
// };

// i tried to use usual expression as below,

// add = function ()  {
//        return  this.setState({count:1})
  
// }

// and 

// add()  {
  
// return this.setState({count:1})
// }

// In both cases i got TypeError:Cannot read propertu 'setState' of undefined

// when i use only console.log, no problem.

// do we have to use only arrow function for method when using setState?
