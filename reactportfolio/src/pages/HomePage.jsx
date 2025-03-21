import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileTeaser';
import ListItem from '../components/UI/ListItem';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function HomePage() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <div className="container pt-4">
        <ul className="list-group list-group"><h1>Welcome to Lee's Portfolio
        </h1></ul>
        Hi, I'm Lee. I'm a software developer with a passion for creating dynamic and user-friendly applications.
        <br/>I specialize in front-end development, but I also have experience with back-end technologies.
        <br/>Feel free to explore my portfolio and contact me if you'd like to work together!
      </div>
      <Col xs={6} md={4}>
        <Image src="../src/assets/profile.png" roundedCircle width={200} height={220} />
      </Col>
    </div>
  );
}

