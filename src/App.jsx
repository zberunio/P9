import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import aboutImage from './assets/images/profile.jpg';
import staLutgardaImage from './assets/images/sta_lutgarda.jpg';
import nagaCollegeImage from './assets/images/naga_college.jpg';
import jollibeeImage from './assets/images/jollibee.jpg'; 
import sutherlandImage from './assets/images/sutherland.jpg';
import musicImage from './assets/images/music.jpg';
import repairImage from './assets/images/computer_repair.jpg';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderContent = () => {
    switch (currentPage) {
      case 'Home':
        return <div className="card">Hi! my name is Zach! Click buttons to know me haha :D.</div>;

      case 'About':
        return (
          <div className="card">
            <h2 className="about-header">About Me</h2>
            <img
              src={aboutImage}
              alt="About Me"
              style={{
                width: '150px', 
                height: '150px', 
                borderRadius: '15px',
                border: '2px solid black',
                padding: '5px',
                boxSizing: 'border-box',
              }}
            />
            <p>
              Hi! My name is Zachary Yuri Berunio, and I’m a working student...
            </p>
            <p>
              I'm currently a 2nd-year Computer Science student, balancing my studies with a full-time job as a
              call center agent. It’s been a challenging situation, but a rewarding experience as I get to develop
              both my technical skills in school and my communication skills at work.
            </p>
            <br />
            Birthdate: December 02, 2001
            <br />
            Age: 22
            <br />
            Current Job: Customer Service - Concentrix
            <br />
            Past Jobs:
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
              <img
                src={jollibeeImage}
                alt="Jollibee Service Crew"
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '15px',
                  marginRight: '1rem',
                  border: '2px solid black',
                  padding: '5px',
                  boxSizing: 'border-box',
                }}
              />
              <div>
                <h4>2021 - 2022: Jollibee - Service Crew</h4>
                <p>Worked as a service crew member handling customer orders and ensuring customer satisfaction.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
              <img
                src={sutherlandImage}
                alt="Sutherland Global Services"
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '15px',
                  marginRight: '1rem',
                  border: '2px solid black',
                  padding: '5px',
                  boxSizing: 'border-box',
                }}
              />
              <div>
                <h4>2022 - 2023: Sutherland Global Services - Customer Service Representative</h4>
                <p>Worked as a customer service representative handling inquiries, complaints, and providing solutions.</p>
              </div>
            </div>
          </div>
        );

      case 'Education':
        return (
          <div className="card" style={{ color: 'black' }}>
            <div style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              <img
                src={staLutgardaImage}
                alt="Sta. Lutgarda National High School"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '15px',
                  marginBottom: '1rem',
                  float: 'left',
                  marginRight: '1rem',
                  border: '2px solid black',
                  padding: '5px',
                  boxSizing: 'border-box',
                }}
              />
              <h3 style={{ fontSize: '0.9rem' }}>2014 - 2018: Junior High - Sta. Lutgarda National High School</h3>
              <h3 style={{ fontSize: '0.9rem' }}>2018 - 2020: Senior High - Sta. Lutgarda National High School</h3>
            </div>
            <div style={{ textAlign: 'left' }}>
              <img
                src={nagaCollegeImage}
                alt="Naga College Foundation Inc."
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '15px',
                  marginBottom: '1rem',
                  float: 'left',
                  marginRight: '1rem',
                  border: '2px solid black',
                  padding: '5px',
                  boxSizing: 'border-box',
                }}
              />
              <h3 style={{ fontSize: '0.9rem' }}>2023 - Present: Naga College Foundation Inc. - BS Computer Science</h3>
            </div>
          </div>
        );

      case 'Hobbies':
        return (
          <div className="card">
            <h3>My Hobbies</h3>
            <p>
              My hobbies are listening to and creating music, computer assembly and repair, and photo, audio, and video editing.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
              <div style={{ textAlign: 'center' }}>
                <img
                  src={musicImage}
                  alt="Music Hobby"
                  style={{
                    width: '250px',
                    height: '150px', 
                    borderRadius: '30px',
                    marginBottom: '1rem',
                    border: '2px solid black',
                    padding: '5px',
                    boxSizing: 'border-box',
                  }}
                />
                <h4>Audio and Video Editing</h4>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img
                  src={repairImage}
                  alt="Computer Repair Hobby"
                  style={{
                    width: '250px', 
                    height: '150px', 
                    borderRadius: '30px',
                    marginBottom: '1rem',
                    border: '2px solid black',
                    padding: '5px',
                    boxSizing: 'border-box',
                  }}
                />
                <h4>Computer Assembly & Repair</h4>
              </div>
            </div>
          </div>
        );

      case 'Contact':
        return (
          <div className="card">
            Phone 1: 09924425815
            <br />
            Phone 2: 09565321015
            <br />
            Email 1: zactzyofficial@gmail.com
            <br />
            Email 2: zachybbscs@gmail.com
            <br />
            School Email: zberunio@gbox.ncf.edu.ph
          </div>
        );

      default:
        return <div className="card"> </div>;
    }
  };

  return (
    <>
      <style>
        {`
          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: Asus ROG, sans-serif;
            background-color: #ffeb3b;
            color: black;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .header {
            text-align: center;
            color: black;
            font-size: 2rem;
            padding: 20px;
            background: #fff;
            margin-bottom: 1rem;
            border-bottom: 2px solid #4caf50;
          }
          .btn {
            margin: 0.5rem;
            background-color: black;
            border: 2px solid black;
            color: white;
            font-size: 1rem;
            font-family: Arial, sans-serif;
            padding: 0.7rem 1.2rem;
            transition: all 0.3s ease;
          }
          .btn:hover {
            background-color: white;
            color: black;
            border: 2px solid black;
          }
          .card {
            margin: 1rem auto;
            padding: 1.5rem;
            background: #f4f4f4;
            color: black;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 800px;
            background-color: yellow;
          }
          .card h2, .card div {
            font-size: 1rem;
            line-height: 1.5;
          }
          .nav-buttons {
            text-align: center;
            margin-bottom: 2rem;
          }
          img {
            display: block;
            margin: 0 auto;
            border-radius: 8px;
            width: 150px; 
            height: 150px; 
            border: 2px solid black;
            padding: 5px;
            box-sizing: border-box;
          }
          .content-wrapper {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            margin-top: 1rem;
          }
        `}
      </style>
      <div className="nav-buttons">
        <Button className="btn" onClick={() => setCurrentPage('Home')}>
          Home
        </Button>
        <Button className="btn" onClick={() => setCurrentPage('About')}>
          About
        </Button>
        <Button className="btn" onClick={() => setCurrentPage('Education')}>
          Education
        </Button>
        <Button className="btn" onClick={() => setCurrentPage('Hobbies')}>
          Hobbies
        </Button>
        <Button className="btn" onClick={() => setCurrentPage('Contact')}>
          Contact
        </Button>
      </div>
      <div className="content-wrapper">
        {renderContent()}
      </div>
    </>
  );
}

export default App;
