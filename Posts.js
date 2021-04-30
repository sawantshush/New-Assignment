import React, { Component } from "react";
import Airline from "./Airline";
import "./Posts.css";

class Posts extends Component {
 
  render() {
    return (
      <div className="grid">
        {this.props.post.map((post) => {
          return (
            <div key={post._id} className="item">
              <h3 className="details_header">Passengers Details</h3>
              <h4>
                Name: <span className="details">{post.name}</span>
              </h4>
              <h4>
                Trips: <span className="details">{post.trips}</span>
              </h4>
              <hr />
              
              <Airline airline={post.airline}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;
