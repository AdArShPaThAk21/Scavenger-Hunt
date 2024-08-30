import { useState, useEffect } from 'react';
import '../index.css';
import png1 from './images/user1.png'; 
import png2 from './images/user2.png'; 
import png3 from './images/user3.png';
import png4 from './images/user4.png';

const TeamSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Maintitle">
      <div className="title_team">
        <h1>Team Name</h1>
        <p>Team Details :-</p>
      </div>
      
      <div className="slider--teams">
        <div className="container">
          <ul id="list" className="row justify-content-center mt-5">
            <li className={`team-data col-md-3 ${activeIndex === 0 ? 'team-data-activate' : ''}`}>
              <div className="d-flex text-center flex-column">
                <div className="span4" style={{ maxHeight: '200px' }}>
                  <img className="hexagon" alt="2" src={png1} />
                </div>
                <h2 className="p-1">Aniket</h2>
                <h5 className="p-2">Team Leader</h5>
                <h5 className="p-2">1000</h5>
              </div>
            </li>

            <li className={`team-data col-md-3 ${activeIndex === 1 ? 'team-data-activate' : ''}`}>
              <div className="d-flex text-center flex-column">
                <div className="span4" style={{ maxHeight: '200px' }}>
                  <img className="hexagon" alt="2" src={png2} />
                </div>
                <h2 className="p-1">Riya</h2>
                <h5 className="p-2">Team Member</h5>
                <h5 className="p-2">1001</h5>
              </div>
            </li>

            <li className={`team-data col-md-3 ${activeIndex === 2 ? 'team-data-activate' : ''}`}>
              <div className="d-flex text-center flex-column">
                <div className="span4" style={{ maxHeight: '200px' }}>
                  <img className="hexagon" alt="2" src={png3} />
                </div>
                <h2 className="p-1">Ayush</h2>
                <h5 className="p-2">Team Member</h5>
                <h5 className="p-2" >1002</h5>
              </div>
            </li>

            <li className={`team-data col-md-3 ${activeIndex === 3 ? 'team-data-activate' : ''}`}>
              <div className="d-flex text-center flex-column">
                <div className="span4" style={{ maxHeight: '200px' }}>
                  <img className="hexagon" alt="2" src={png4} />
                </div>
                <h2 className="p-1">Shurabhi</h2>
                <h5 className="p-2">Team Member</h5>
                <h5 className="p-2">1003</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamSlide;
