import React, { Component } from 'react';
import "../PageCard/PageCard.css"

export default class PageCard extends Component {
    
    render() {

        class Square extends React.Component {
            render() {
                var squareStyle = {
                    height: 150,
                    backgroundColor: this.props.color
                };

                var img={
                    borderRadius:"50%",
                    width:"150px",
                    height:"150px"
                }
                
                return(
                    <div style={squareStyle}>
                        <img src={this.props.pic} alt="" style={img}/>
                    </div>
                );
            }
        }

        class Label extends React.Component {
            render() {
                var labelStyle = {
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    padding: 13,
                    margin: 0
                };
                
                return (
                    <div>
                        <p style={labelStyle}>{this.props.name}</p>
                    </div>
                    
                );
            }
        }
        var cardStyle = {
            height: 200,
            width: 150,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };

        return (
            <div style={cardStyle}>
                <Square color={this.props.color} pic={this.props.pic}/>
                <Label name={this.props.name}/>
                <h4 className='designation'>{this.props.designation}</h4>
            </div>
        );
    }
}
