import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0,
            dislikes: 0,
            totalRatings: 0,
            handleLike: () => {
                this.setState((prevState) => ({
                    likes: prevState.likes + 1,
                    totalRatings: prevState.totalRatings + 1
                }))
            },
            handleDislike: () => {
                this.setState((prevState) => ({
                    dislikes: prevState.dislikes + 1,
                    totalRatings: prevState.totalRatings + 1
                }))

            }
        };
    }
    render() {
        return (
            <>
                <div className='content-rating'>
                    <h1> Rating system </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum
                    </p>
                    <div className='rating-buttons'>
                        <button className="like-button" onClick={this.state.handleLike}>
                            Like ({this.state.likes})
                        </button>
                        <button className="dislike-button" onClick={this.state.handleDislike}>
                            Dislike ({this.state.dislikes})
                        </button>
                    </div>
                    <h2 > Total ratings = {this.state.totalRatings}</h2>
                </div >
            </>
        );
    }
}

export default ContentRating;