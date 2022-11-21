import React, { useState } from 'react';
import { Container, Stack, Row, Col } from 'react-bootstrap';
import './restaurantlist.css';
import { FcRating } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addRestaurant } from '../../features/restaurants/restaurantSlice';


export const RestaurantList = ({ arrayRestaurant: restaurantArray }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleClick = (restaurant) => () => {
        dispatch(addRestaurant(restaurant));
        navigate("/dishes");
     };

    return (
        <>
            <Container fluid className='login_container'>
                <Stack>
                    {restaurantArray.map((restaurantObject, index) => {
                        return (
                            <>
                                <Row key={index} onClick={handleClick(restaurantObject)} >
                                    <Col xs={2}><img src={restaurantObject.imagen} alt="restaurant"/></Col>
                                    <Col>
                                        <p className='desc_text'>{restaurantObject.descripcion}</p>
                                        <p className='rating_text'><FcRating /> {restaurantObject.numStars}</p>
                                        <p className='work_time_text'>{restaurantObject.workTime}</p>
                                        <p>Before you <b>{restaurantObject.beforeyou}</b></p>
                                    </Col>
                                </Row>
                                <hr />
                            </>
                        )
                    })}
                </Stack>
            </Container>
            </>
    )
};
export default RestaurantList;

