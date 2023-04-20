import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CityForm = ({ onFormSubmit, onCityInputChange }) => (
    <Form className='city-form' onSubmit={onFormSubmit}>
        <Form.Group className='city-form-label'>
            <Form.Label>Type a City Name</Form.Label>
        </Form.Group>
        <Form.Group>
            <Form.Control type="text" onChange={onCityInputChange} placeholder='e.g Seattle'/>
        </Form.Group>
        <Form.Group>
            <Button className='city-button' type='submit'>Explore!</Button>
        </Form.Group>
    </Form>
);

export default CityForm;