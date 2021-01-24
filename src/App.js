import React from 'react';




const foodILike=[
  {
    id:1,
    name:"kimchi",
    image:"https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2018/11/06/20181106000941_0.jpg",
    rating: 5.5
  },
  {
    id:2,
    name:"porkbelly",
    image:"https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG",
    rating: 4.7
  },
  {
    id:3,
    name:"bibimbap",
    image:"https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2019/05/15/69fef116645e4a60899712b7e2fd42b7_hangookguan3-1-1030x773.jpg",
    rating: 4.5
  },
  {
    id:4,
    name:"sushi",
    image:"https://resources.matcha-jp.com/old_thumbnails/720x2000/1529.jpg",
    rating: 4.4
  },
  {
    id:5,
    name:"ramen",
    image:"https://img.hani.co.kr/imgdb/resize/2012/0806/8000971505_20120806.JPG",
    rating: 4.3
  },
];

function Food(props) {
  
  return<div>
    
    <h2> i like {props.name}</h2>
    <img src = {props.picture} alt={props.name}></img>
  </div>
}


function App() {
  return (
    <div className="App">
      
      {foodILike.map(dish =><Food key={dish.id} name={dish.name} picture={dish.image}/>)}
    
    
    </div>
    
  );
}

export default App;
