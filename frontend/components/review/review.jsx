import React from 'react';
import { Link } from 'react-router';
import {hashHistory} from 'react-router';
import ReactStars from 'react-stars'
import { render } from 'react-dom'
import StarRating from 'react-star-rating';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: undefined,
      body: ""
    };
  
    // this.handleChangeStart = this.handleChangeStart.bind(this);
    // this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleReview = this.handleReview.bind(this);
    // this.handlePartySize = this.handlePartySize.bind(this);

  }

  ratingChanged(newRating) {
    this.setState({
      rating: newRating
    });
  }


  // componentWillReceiveProps(newProps) {
  //   // debugger
  //   this.setState(newProps.room);
  // }

  // componentDidMount() {
  // }

  // handleChangeStart(date) {
  //   this.setState({
  //     startDate: date
  //   });
  // }

  updateBody(newBody) {
    this.setState({
      body: newBody
    });
  }

  handleReview(e) {
    e.preventDefault();
    debugger
    const currentUserId = this.props.currentUser.id;
    const currentRoomId = this.props.currentRoom.id;
    const body = this.state.body;
    const rating = this.state.rating;
    this.props.createReview({user_id: currentUserId, room_id: currentRoomId, body: body, rating: rating})
    
  }

  // handlePartySize(e) {
  //   e.preventDefault();
  //   this.setState({
  //     party_size: e.target.value
  //   });
  // }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error,i) => (
          <li key={`errors-${i} `}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  // {this.renderErrors()}

  
  

  render() {
    console.log(this.state);
    return(
      <div className="review">
        <h4 className="review-header">Leave a Review: </h4>
        {this.renderErrors}
        <form className="review-form" action="">
            <label className="review-label" htmlFor="review-body"></label>
            <input className="review-body" type="text" onChange={this.updateBody} value={this.state.body}/>
            <ReactStars
              count={5}
              onChange={this.ratingChanged}
              size={24}
              color2={'#ffd700'} 
              half={false}/>
          
        </form>
        <button onClick={this.handleReview}> Submit Review</button>
        

        
      </div>
    );
  }

}

export default Review;