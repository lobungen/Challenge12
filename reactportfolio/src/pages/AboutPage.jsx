import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
export default function AboutPage() {
  return (
    <Container>


    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Family</Accordion.Header>
      <Accordion.Body>
      I have four boys, and we share a deep bond over our love for soccer and swimming. 
        Whether we're playing a competitive match or spending time together at the pool, 
        these activities bring us closer and foster a sense of teamwork and fun. Our shared 
        interests create a strong foundation for connection and have taught us valuable 
        lessons in collaboration, discipline, and perseverance. Above all, we cherish the 
        moments spent together, enjoying both friendly competition and shared laughter.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Passion</Accordion.Header>
      <Accordion.Body>
      My passion for software development stems from my deep interest in problem-solving 
      and creating impactful solutions through technology. I thrive on the challenge of 
      turning complex ideas into functional, user-friendly applications that can solve 
      real-world problems. The ever-evolving nature of software development keeps me 
      constantly engaged, as I enjoy learning new tools, programming languages, and best 
      practices to stay ahead of the curve. For me, software development isn't just about 
      writing code—it's about making a meaningful difference by building systems that 
      improve the way people live and work.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>Hobbies</Accordion.Header>
      <Accordion.Body>
        <li>Gaming</li>
        <li>Reading</li>
        <li>Cooking</li>
        <li>Traveling</li>
        <li>Photography</li>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  </Container>
  );
}
