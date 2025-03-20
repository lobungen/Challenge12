import { useState, useEffect } from 'react';
// Todo: Bring in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileTeaser';
import ListItem from '../components/UI/ListItem';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function HomePage() {
  // Prior to the return statement, our homepage uses a few react hooks and fetchData function to query to a mock database and retrieve random user data
  const [users, setUsers] = useState([]);

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div>
      <div className="container pt-4">
        <ul className="list-group list-group">Welcome to my Portfolio
        </ul>
      </div>
      <Col xs={6} md={4}>
        <Image src="..assets/react.svg/1071x1080" roundedCircle />
      </Col>
    </div>
  );
}

