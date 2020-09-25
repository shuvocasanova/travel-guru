import React, { useContext } from 'react';
import room1 from '../../images/Rectangle 26.png';
import room2 from '../../images/Rectangle 27.png';
import room3 from '../../images/Rectangle 28.png';
import './RoomDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import { UserContext } from '../../App';


const RoomDetails = () => {

    const { roomId } = useParams();

    fakeData.find(destination => destination.id === roomId);

    const [loggedInUser] = useContext(UserContext);



    return (
        <div className='d-flex'>
            <div className="m-5 booking">
                <p>Welcome <b> {loggedInUser.name}! </b> Your email: {loggedInUser.email}</p>
                <p> <small> 252 stays Apr 13-17 3 guests</small></p>
                <h3> <b>Stay in Cox's Bazar</b> </h3>
                <br />
                <div className=" d-flex align-items-center">
                    <div>
                        <img src={room1} alt="" />

                    </div>
                    <div className="ml-3 room1">
                        <h5>Light bright airy stylish apt & safe peaceful stay</h5>
                        <p><small>4guests 2 bedrooms 2 beds 2 baths</small></p>
                        <p><small>With Air conditioning kitchen</small></p>
                        <p><small>Cancellation flexibility available</small></p>
                        <p> <FontAwesomeIcon className="star-icon" icon={faStar} /> <b>4.9(20)  $34/</b>night $167 total</p>
                    </div>

                </div>
                <div className="d-flex align-items-center">
                    <div>
                        <img src={room2} alt="" />
                    </div>
                    <div className=" ml-3 room2">
                        <h5>Apartment in Lost Panorama</h5>
                        <p><small>4guests 2 bedrooms 2 beds 2 baths</small></p>
                        <p><small>With Air conditioning kitchen</small></p>
                        <p><small>Cancellation flexibility available</small></p>
                        <p> <FontAwesomeIcon className="star-icon" icon={faStar} />  <b>4.8(10)  $52/</b>night $167 total</p>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div>
                        <img src={room3} alt="" />

                    </div>
                    <div className="ml-3 room3">
                        <h5>Air Lounge & Pool</h5>
                        <p> <small>4guests 2 bedrooms 2 beds 2 baths</small> </p>
                        <p><small>With Air conditioning kitchen</small></p>
                        <p><small>Cancellation flexibility available</small></p>
                        <p> <FontAwesomeIcon className="star-icon" icon={faStar} /> <b> 4.9(25)  $44/</b>night $167 total</p>
                    </div>


                </div>


            </div>

            <div className="mt-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1885735.158239781!2d90.13871043689774!3d22.61361901427402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sdhaka!3m2!1d23.810332!2d90.4125181!4m5!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2scox&#39;s%20bazar!3m2!1d21.4272283!2d92.0058074!5e0!3m2!1sen!2sca!4v1600461913361!5m2!1sen!2sca" width="450" height="700" frameBorder="0" style={{ border: 0, marginTop: '20px', padding: '10px', borderRadius: '20px' }} allowFullScreen="" ariaHidden="false" tabIndex="0"></iframe>

            </div>

        </div>
    );
};

export default RoomDetails;