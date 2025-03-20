import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
export default function AboutPage() {
  return (
    <Container>


    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Education</Accordion.Header>
      <Accordion.Body>
      <p>Bachelor of Science in Computer Science | University of Oregon, Oregon 2014–2018</p>
      <p>Honors: Dean's list for the 2015–2016 academic year</p>
      <p>Student societies: Deputy President of the Computer Science Student Association, 2016–2017 </p>
      <p>Relevant coursework: Data Structures, Algorithms, Computer Systems, Software Engineering, Database Systems</p>
      <p>GPA: 3.85</p>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Experience</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>Skills</Accordion.Header>
      <Accordion.Body>
        <li>react</li>
        <li>javascript</li>
        <li>node.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Git</li>
        <li>Agile methodologies</li>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  </Container>
  );
}
