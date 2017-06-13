import React from 'react';
import { Link } from 'react-router';
import RoomMap from '../room_map/room_map';
import BookingContainer from '../booking/booking_container';
import ReviewContainer from '../review/review_container';
import Modal from 'react-modal';
import ModalStyle from './modal_style';


class CurrentRoomShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.room;
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.room);
  }

  componentDidMount() {
    this.props.fetchRoom(this.props.roomId);
    this.setState({modalIsOpen: false});
  }


  renderGuests(max_party_size) {
    if (max_party_size > 1) {
      return( <span className="big-details-items">{max_party_size} Guests</span>);
    } else {
      return( <span className="big-details-items">{max_party_size} Guest</span>);
    }
  }


  renderBedrooms(numOfBedrooms) {
    if (numOfBedrooms > 1) {
      return( <span className="big-details-items">{numOfBedrooms} Bedrooms</span>);
    } else {
      return( <span className="big-details-items">{numOfBedrooms} Bedroom</span>);
    }
  }

  renderBeds(numOfBeds) {
    if (numOfBeds > 1) {
      return( <span className="big-details-items">{numOfBeds} Beds</span>);
    } else {
      return( <span className="big-details-items">{numOfBeds} Bed</span>);
    }
  }

  render() {
    const room = this.props.room;
    let divStyle = {
      backgroundImage: 'url(' + room.img_url + ')'
    }

    return(
      <div className="show-page">
        <div className="img-container" style={divStyle} onClick={this.openModal}>
        </div>
        <div className="show-details">
          <div className="short-summary">

            <span className="detail-name">{room.name}</span>
            <span className="detail-city"><label>City: </label> {room.city}</span>

            <div className="big-details">
              <div className="big-details-col">
                <img src="http://res.cloudinary.com/candyentropy/image/upload/v1493100168/home_r5atyr_c8qlnj.png" alt=""/>
                <span>{room.homeType}</span>
              </div>
              <div className="big-details-col">
                <img src="http://res.cloudinary.com/candyentropy/image/upload/v1493100170/multiple-users-silhouette_knjpis_j6keuo.png" alt=""/>
                {this.renderGuests(room.accommodates)}
              </div>

              <div className="big-details-col">
                <img src="http://res.cloudinary.com/candyentropy/image/upload/v1493100168/door_fjofuz_drhl5o.png" alt=""/>
                {this.renderBedrooms(room.bedrooms)}
              </div>

              <div className="big-details-col">
                <img src="http://res.cloudinary.com/candyentropy/image/upload/v1493100168/bed_nzrgdr_ehvy8t.png" alt=""/>
                {this.renderBeds(room.beds)}
              </div>
            </div>
          </div>

          <div className="about">
            <h4>About this Listing</h4>

            <table className="about-table">
              <tbody>
              <tr>
                <th>This Space </th>
                <td>Accommodates: <span className="about-details">{room.accommodates}</span></td>
                <td>Bathrooms: <span className="about-details">{room.bathrooms}</span></td>
                <td>Bedrooms: <span className="about-details">{room.bedrooms}</span></td>
                <td>Beds: <span className="about-details">{room.beds}</span></td>
              </tr>
              <tr>
                <th>Price</th>
                <td>{room.price} Credits<br />Extra people: <div className="about-details">{Number.parseInt(room.price*(0.2))}/ night for extra guests</div></td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{room.description}</td>
              </tr>
              </tbody>
            </table>
          </div>

            <ReviewContainer room={room} roomId={this.props.roomId}/>
            <h3 className="booking-h3">Book this room</h3>

            <BookingContainer currentRoom={room}/>

        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}
          contentLabel="Modal"
          className="img-modal"
        >
          <img src={room.img_url} alt="" onClick={this.closeModal}/>
        </Modal>
      </div>
    );
  }

}

export default CurrentRoomShow;
