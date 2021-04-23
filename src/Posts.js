import React, { Component } from "react";
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
              <h3 className="details_header">Airline Details</h3>
              
              <img
                src={post.airline.logo}
                className="details_right"
                alt={post.id}
              />
              
              <h4>
                Name: <span className="details">{post.airline.name}</span>
              </h4>
              <h4>
                Country: <span className="details">{post.airline.country}</span>
              </h4>
              <h4>
                Origin:{" "}
                <span className="details">{post.airline.head_quaters}</span>
              </h4>
              
              <h4>
                Since:{" "}
                <span className="details">{post.airline.established}</span>
              </h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;
