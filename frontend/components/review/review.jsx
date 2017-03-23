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
    debugger
    if (newProps.room){
      this.setState(newProps.room);
      
    }
  }

  ratingChanged(newRating) {
    console.log(newRating);
    console.log(this);
    this.setState({
      rating: newRating
    });
  }




  componentDidMount() {
  }

  // handleChangeStart(date) {
  //   this.setState({
  //     startDate: date
  //   });
  // }

  updateBody(e) {
    e.preventDefault();

    this.setState({body: e.currentTarget.value});
  }

  handleReview(e) {
    e.preventDefault();
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
    if (this.props.errors) {
      debugger
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

  // {this.renderErrors()}

  
  

  render() {
    console.log("THESE IS STATE: ")
    console.log(this.state);
    console.log("THESE ARE PROPS: ")
    console.log(this.props);
    return(
      <div className="review">
        <h4 className="review-header">Leave a Review: </h4>
        {this.renderErrors}
        <form className="review-form" action="">
            <label className="review-label" htmlFor="review-body"></label>
            <textarea className="review-body" placeholder="Write a review here!" onChange={this.updateBody} value={this.state.body} />
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
  }

}

export default Review;