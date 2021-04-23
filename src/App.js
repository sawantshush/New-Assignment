
import './App.css';
import React, { Component } from 'react';
import Posts from "./Posts"; 

class App extends Component {

  constructor(){
    super();
    this.state={
      postPerFetch:0,
      posts:[]
    }
  }
  // to initally fetch the data
  componentDidMount(){
    this.fetchData(this.state.postPerFetch);
    window.addEventListener("scroll",this.handleScroll);
  }

  //to remove the eventlistner
  componentWillUnmount(){
    window.removeEventListener("scroll",this.handleScroll)
  }

  //fetch Data from the Api
  fetchData=async(postStart)=>{
  
      const URL=`https://api.instantwebtools.net/v1/passenger?page=${postStart}&size=10`;
      await fetch(URL).then(response=>response.json()).then(response=>{
        //  console.log("response",response.data.length)
        this.setState({
          posts:[...this.state.posts,...response.data]
        })
      })
     
  }

  // to check whether the scrollbar has reach the end of the screen
  handleScroll=()=>{
    if(window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight){
        // console.log("handleScroll")
      let newfetch=this.state.postPerFetch;
      newfetch+=1;
      this.setState({postPerFetch:newfetch})
      this.fetchData(this.state.postPerFetch);
    }
  }
  render() {
    return (
      <div>
      <h1 className="app_header"> Passengers and Airline Details</h1>
        <Posts post={this.state.posts}/>
      </div>
    )
  }
}


export default App;
