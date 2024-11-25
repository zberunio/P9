import { useState, useRef } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const dragContainerRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    const container = dragContainerRef.current;
    const rect = container.getBoundingClientRect();

    const newLeft = e.clientX - rect.width / 2;
    const newTop = e.clientY - rect.height / 2;

    container.style.position = 'absolute';
    container.style.left = `${newLeft}px`;
    container.style.top = `${newTop}px`;
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'Home':
        return <h2>This is an example of Home Page. Click here to know more about me.</h2>;
      case 'About':
        return (
          <h2>
            About Me: Hi! My name is Zachary Yuri Berunio, and I’m a working student. I’m currently a 2nd-year
            Computer Science student, balancing my studies with a full-time job as a call center agent. It’s been a
            challenging situation, but rewarding experience as I get to develop both my technical skills in school
            and my communication skills at work.
            <br />
            Birthdate: December 02, 2001
            <br />
            Age: 22
            <br />
            Current Job: Customer Service - Concentrix
            <br />
            Past Jobs: 2021 - 2022 Jollibee - Service Crew
            <br />
            2022 - 2023 - Sutherland Global Services - Customer Service Representative
          </h2>
        );
      case 'Education':
        return (
          <h2>
            Education: 2014 - 2018 Junior High: Sta Lutgarda National High School
            <br />
            2018 - 2020 Senior High: Sta. Lutgarda National High School - Computer System Servicing NC II
            <br />
            2023 - Present: Naga College Foundation Inc. BS Computer Science
          </h2>
        );
      case 'Hobbies':
        return <h2>My hobbies are listening and making music, Computer assembly and repair
          <br />
          and. Photo, audio and video editing</h2>;
      case 'Contact':
        return <h2>Phone 1: 09924425815
          <br />
          Phone 1: 09565321015
          <br />
          Email 1: zactzyofficial@gmail.com
          <br />
          Email 2: zachybbscs@gmail.com
          <br />
          School Email: zberunio@gbox.ncf.edu.ph
        </h2>;
      default:
        return <h2>Welcome to the Home Page</h2>;
    }
  };

  return (
    <>
      <style>
        {`
          body {
            font-family: 'Comic Sans MS', 'Comic Sans', cursive;
            background-color: black;
            color: white;
          }
          .header {
            text-align: center;
            color: white;
            padding: 20px;
            font-size: 24px;
          }
          .btn {
            background-color: red;
            border: 1px solid darkred;
            color: white;
            font-weight: bold;
          }
          .btn:hover {
            background-color: darkred;
          }
        `}
      </style>
      <header className="header">Hi there!</header>
      <div
        ref={dragContainerRef}
        style={{
          display: 'inline-block',
          padding: '10px',
          cursor: 'move',
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
        draggable="true"
        onDrag={handleDrag}
      >
        <Button variant="primary" onClick={() => setCurrentPage('Home')}>
          Home
        </Button>{' '}
        <Button variant="secondary" onClick={() => setCurrentPage('About')}>
          About
        </Button>{' '}
        <Button variant="success" onClick={() => setCurrentPage('Education')}>
          Education
        </Button>{' '}
        <Button variant="info" onClick={() => setCurrentPage('Hobbies')}>
          Hobbies
        </Button>{' '}
        <Button variant="warning" onClick={() => setCurrentPage('Contact')}>
          Contact
        </Button>
      </div>
      <div>{renderContent()}</div>
    </>
  );
}

export default App;
