import React, { useState } from 'react';
import './Home.css';
import fakeData from '../../fakeData/fakeData';
import { Link } from 'react-router-dom';


export const Home = () => {


    const [destination, setDestination] = useState([fakeData]);

    const [bookings, setBookings] = useState([]);

    const handleBookLocation = (event) => {
        setBookings(event);

    }

    return (
        <div className="home d-flex">

            <div className="home-text pt-5 my-5">
                <h1>{bookings.title}</h1>
                <p>{bookings.frontDesc}</p>
                <br />
                <Link to={"/booking/" + bookings.id}>
                    <button className="home-btn"> Booking </button> </Link>


            </div>
            <div className="ml-auto home-image pt-5 my-5">

                {
                    fakeData.map(pl => <img onClick={() => handleBookLocation(pl)}
                        onLoad={() => handleBookLocation(pl)}
                        src={pl.img} key={pl.id} alt="" />)
                }

            </div>

        </div>


    );
};

export default Home;