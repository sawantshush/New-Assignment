import React, { Component } from 'react'

export default class Airline extends Component {
    render() {
        // console.log(this.props.airline);
        return (
          
            <div>
              { this.props.airline &&
               <h3 className="details_header">Airline Details</h3>
              }
              <img
                src={this.props.airline.logo}
                className="details_right"
                alt={this.props.airline.id}
              />
             { this.props.airline.name &&
              <h4>
                Name: <span className="details">{this.props.airline.name}</span>
              </h4> }
              {this.props.airline.country &&
              <h4>
                Country: <span className="details">{this.props.airline.country}</span>
              </h4> }
              {this.props.airline.head_quaters &&
              <h4>
                Origin:{" "}
                <span className="details">{this.props.airline.head_quaters  }</span>
              </h4>
              }
              {this.props.airline.established &&
              <h4>
                Since:{" "}
                <span className="details">{this.props.airline.established}</span>
              </h4> 
              }
            </div>
          
        )
    }
}
