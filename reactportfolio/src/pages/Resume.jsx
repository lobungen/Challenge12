import Stack from 'react-bootstrap/Stack';

function Resume() {
  return (
    <Stack gap={3}>
      <div className="p-2"><h3>Education</h3></div>
      <p>Bachelor of Science in Computer Science | University of Oregon, Oregon 2014–2018</p>
      <p>Honors: Dean's list for the 2015–2016 academic year</p>
      <p>Student societies: Deputy President of the Computer Science Student Association, 2016–2017 </p>
      <p>Relevant coursework: Data Structures, Algorithms, Computer Systems, Software Engineering, Database Systems</p>
      <p>GPA: 3.85</p>

      <div className="p-2"><h3>Experience</h3></div>
      <p>Software Engineer at Tech Company | 2018–Present</p>
      <p>Responsibilities include developing and maintaining web applications, collaborating with cross-functional teams, and implementing new features.</p>
      <p>Intern at Startup | Summer 2017</p>
      <p>Assisted in the development of a mobile application, conducted user testing, and provided feedback to the development team.</p>


      <div className="p-2"><h3>Skills</h3></div>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Git</li>
        <li>Agile methodologies</li>
      </ul> 
    </Stack>
  );
}

export default Resume;