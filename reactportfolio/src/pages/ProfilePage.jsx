import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileDetailed';
import Container from '../components/UI/ListItem';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function ProfilePage() {
  const [user, setUser] = useState({});

  return (
    <>
      <Container>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="../src/assets/TS.png" height={150}/>
        <Card.Body>
          <Card.Title>TypeScript and Object-Oriented Programming</Card.Title>
          <Card.Text>
            Things we learned in this course:
          <li>Explain the purpose and benefits of using TypeScript versus JavaScript.</li>
          <li>Configure and use the TypeScript Compiler (TSC).</li>
          <li>Convert JavaScript into equivalent TypeScript using types.</li>
          <li>Identify and implement the most common types used in TypeScript.</li>
          <li>Implement class syntax to create new instances of objects.</li>
          <li>Identify the four pillars of the object-oriented programming paradigm.</li>
          <li>Implement object-oriented programming within the context of JavaScript and TypeScript.</li>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><a href="https://github.com/lobungen/Challenge8">TS and OOP</a></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../src/assets/API.png" height={150} />
        <Card.Body>
          <Card.Title>Servers and APIs</Card.Title>
          <Card.Text>
          Things we learned in this course:
          <li>Configure an Express.js app to handle GET, POST, PUT, and DELETE requests.</li>
          <li>Configure an Express.js app to serve static files and parse JSON to dynamically generate HTML.</li>
          <li>Explain HTTP response codes and handle response metadata.</li>
          <li>Parse optional and required parameters when creating server-side routes.</li>
          <li>Implement client-side POST requests to submit form data to a server.</li>
          <li>Implement separation of concerns for routing.</li>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><a href="https://github.com/lobungen/Challenge9">Servers and APIs</a></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../src/assets/SQL.jpg" height={150}/>
        <Card.Body>
          <Card.Title>SQL</Card.Title>
          <Card.Text>
          Things we learned in this course:
          <li>Use PostgreSQL Shell to execute commands.</li>
          <li>Create a database schema.</li>
          <li>Seed a database for use in application development.</li>
          <li>Perform CRUD functions using PostgreSQL commands.</li>
          <li>Specify the relationship between tables using primary and foreign keys.</li>
          <li>Write a SQL query that joins two tables together.</li>
          <li>Perform a calculation on a set of values using aggregate functions.</li>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><a href="https://github.com/lobungen/Challenge10">SQL</a></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../src/assets/Prompt-Engineering.jpg" height={150} />
        <Card.Body>
          <Card.Title>Prompt Engineering</Card.Title>
          <Card.Text>
          Things we learned in this course:
          <li>Explain the relationship between machine learning and artificial intelligence.</li>
          <li>Compare and contrast supervised learning, unsupervised learning, and reinforcement learning.</li>
          <li>Explain the meaning and significance of natural language processing.</li>
          <li>Evaluate the definition, features, and benefits of large language models.</li>
          <li>Implement code to integrate with OpenAI and LangChain to incorporate AI-generated responses into application functionality.</li>
          <li>Apply prompt engineering techniques to generate code that is clear, effective, and correct.</li>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><a href="https://github.com/lobungen">Prompt Engineering</a></small>
        </Card.Footer>
      </Card>      <Card>
        <Card.Img variant="top" src="../src/assets/nodejs.png" height={150} />
        <Card.Body>
          <Card.Title>Node.js</Card.Title>
          <Card.Text>
          Things we learned in this course:
          <li>Build interactive command-line applications that process user input.</li>
          <li>Explain modularization and how it relates to npm and the standard library.</li>
          <li>Initialize new Node.js projects with npm, and install and import dependencies.</li>
          <li>Use more advanced JavaScript syntax like arrow functions and destructuring.</li>
          <li>Handle asynchronicity with callbacks and Promises.</li>
          <li>Use fs to read and write to files.</li>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><a href="https://github.com/lobungen/challenge7">Node.js</a></small>
        </Card.Footer>
      </Card>
    </CardGroup> 
      </Container>
    </>
  );
}

