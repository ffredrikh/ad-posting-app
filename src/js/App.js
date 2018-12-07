import React, { Component } from 'react';
import '../css/App.css';
import AddAdBtn from './PostAd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
                  <Title />
                  <AddAdBtn />
                  <AdsList />
        </header>
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return (
      <div className="SomeText">
        <h1>Ad Postings!</h1>
        <hr></hr>
      </div>
    );
  }
}



function Pictures(props){

  const pics = props.value.map((p) =>
    <li key={p.id}>{p.url}</li>
  );

  return(
    <div>{pics[0]}</div>

  )
}

function ListItem(props){

  return (
    <li><Pictures value={props.value.pictures}/> | {props.value.title} | {props.value.text} | {props.value.category}</li>
  );
}


function AdsList (){
  const ads = GetAdsData();

  const listItems = ads.map((ad) =>
    <ListItem key={ad.id} value={ad} />
  );

  return(
    <ul>{listItems}</ul>
  );

}

function GetAdsData(){
  return [
    {
        "id": 1,
        "title": "car for sale",
        "text": "so cool",
        "category": "lowrider",
        "pictures": [
            {
                "id": 1,
                "adInfoId": 1,
                "title": "testtitle",
                "url": "testurl"
            }
        ]
    },
    {
      "id": 2,
        "title": "Nice cat",
        "text": "Very sweet!",
        "category": "animal",
        "pictures": [
            {
                "id": 1,
                "adInfoId": 2,
                "title": "testtitle",
                "url": "testurl"
            }
        ]
    },
    {
      "id": 3,
        "title": "Old computer",
        "text": "Big and beautiful.",
        "category": "Electronics",
        "pictures": []
    },
    {
      "id": 4,
        "title": "Bed",
        "text": "New fresh n cosy bed",
        "category": "Furniture",
        "pictures": []
    },
    
]
}

export default App;
