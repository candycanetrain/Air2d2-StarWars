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
      rating: 1,
      body: ""
    };
  
    // this.handleChangeStart = this.handleChangeStart.bind(this);
    // this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleReview = this.handleReview.bind(this);
    // this.handlePartySize = this.handlePartySize.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.reviews.length !== newProps.reviews.length) {
      this.props.fetchReviews({room_id: this.props.roomId});
    }
  }



  ratingChanged(newRating) {
    this.setState({
      rating: newRating
    });
  }


  componentDidMount() {
    this.props.fetchReviews({room_id: this.props.roomId})
  }


  updateBody(e) {
    e.preventDefault();

    this.setState({body: e.currentTarget.value});
  }

  handleReview(e) {
    e.preventDefault();
    const currentUserId = this.props.currentUserId;
    const currentRoomId = this.props.roomId;
    const body = this.state.body;
    const rating = this.state.rating;
    this.props.createReview({user_id: currentUserId, room_id: currentRoomId, body: body, rating: rating})
    this.setState({body: ""});
  }

  renderErrors() {
    if (this.props.errors) {
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
    
  }


  render() {
    console.log("THESE ARE PROPS: ")
    console.log(this.props);
    if (this.props.reviews !== undefined){
      const reviews = this.props.reviews;
      
    return(
      <div className="review">
        <h2>Reviews :</h2>

        <ul className="reviews-show">
          {reviews.map((review) => (
            <li key={review.id}>
              <span className="review-user">{review.user.name} says: </span>
              <span className="review-body">{review.body}</span>
            </li>

          ))}
        </ul>



        <h4 className="review-header">Leave a Review: </h4>
        {this.renderErrors}
        <form className="review-form" action="">
            <label className="review-label" htmlFor="review-body"></label>
            <textarea className="review-body" placeholder="Write a review here!" onChange={this.updateBody} value={this.state.body}>
            </textarea>
            
            <ReactStars
              count={5}
              onChange={this.ratingChanged}
              size={24}
              color2={'#ffd700'} 
              half={false}/>
          
        </form>
        <button onClick={this.handleReview}> Submit Review</button>
              {this.renderErrors}
        

        
      </div>
    );
    } else {
      return(
         <div>
          "There are no reviews"
        </div>
      );
    }
  }

}

export default Review;