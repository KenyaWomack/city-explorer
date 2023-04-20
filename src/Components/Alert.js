import React from 'react';
import { Alert } from 'react-bootstrap';

const CityAlert = ({ errorMessage }) => (
    <Alert variant='danger'>
        <Alert.Heading>Error {errorMessage}</Alert.Heading>
        <p>Failed to retrieve city information. Please try again.</p>
    </Alert>
);

export default CityAlert;