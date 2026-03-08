import volunteerIcon from '../../../assets/Icons/volunteer_icon_png.png';
import microphoneIcon from '../../../assets/Icons/microphone_icon.png';
import starIcon from '../../../assets/Icons/star_icon_png.png';

export default function GetInvolved() {
  return (
    <section id="get-involved" className="getInvolved">
      <div className="container">
        <div className="cardWrapper">
          <div className="card">
            <a href="https://tally.so/r/w7BkgA" className="cardLink">
              <img src={volunteerIcon} alt="Join Our Volunteers" className="cardIcon" />
              <h3 className="cardTitle">Join Our Volunteers</h3>
              <p className="cardDescription">Connect with the local community by lending a hand at our next event.</p>
            </a>
          </div>
          <div className="card">
            <a href="https://tally.so/r/wv79vQ" className="cardLink">
              <img src={microphoneIcon} alt="Share Your Voice" className="cardIcon" />
              <h3 className="cardTitle">Share Your Voice</h3>
              <p className="cardDescription">We're looking for passionate speakers to inspire our AWS community.</p>
            </a>
          </div>
          <div className="card">
            <a href="https://tally.so/r/mBORVN" className="cardLink">
              <img src={starIcon} alt="Partner With Us" className="cardIcon" />
              <h3 className="cardTitle">Partner With Us</h3>
              <p className="cardDescription">Your support goes directly toward food and drinks for 100 AWS innovators.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}