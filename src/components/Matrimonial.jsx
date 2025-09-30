import "./Matrimonial.css"; // Add styles for this component
import SEO from './SEO';
import matrimonialImage from "../assets/shutterstock_1944702031.jpg";

const Matrimonial = () => {
  return (
    <div className="main">
      <SEO 
        title="ICSGV | Matrimonial Services"
        description="Free matrimonial services for the Muslim community under the supervision of Imam Hafiz Ahmed Hassan."
        preloadImage={matrimonialImage}
        priority="high"
      />
      <div className="wrapper">
        <h5 className="assalamualaikum">Assalamualaikum</h5>
        <h1 className="welcome">
          Welcome to the Islamic Center of San Gabriel Valley (ICSGV)
        </h1>
        <div className="matrimonial-container">
          <div className="matrimonial-section">
            <div className="matrimonial-text">
              <p>
                ICSGV is offering a Free Matrimonial Service for the Muslim
                community. The service is being conducted under the supervision
                of our respected Imam, Hafiz Ahmed Hassan. Candidates will
                submit applications, they will be interviewed and will be
                matched according to their requirements.
              </p>
              <p>
                If you’re interested in the service, please fill out{" "}
                <a href="https://drive.google.com/file/d/1ToKx4N8XmhGigc79rEBtzU0hb8FQW69d/view?usp=sharing">
                  this
                </a>{" "}
                application and submit it via email to
                <a href="mailto:Ahmad.hassan@icsgv.com">
                  {" "}
                  Ahmad.hassan@icsgv.com
                </a>
                .
              </p>
              <p>
                All information will be confidential and held with the utmost
                privacy.
              </p>
              <p>
                <strong style={{ color: "red" }}>Disclaimer:</strong> Be advised
                that the Islamic Center of San Gabriel Valley (ICSGV) is
                providing an “Introduction” to all candidates. ICSGV will not
                bear responsibility for the outcome of said “introductions”. All
                candidates are to assume responsibility for the verification of
                the references provided on the applicant’s form. ICSGV strongly
                suggests that applicants enlist the support/involvement of
                family and friends during this process. It is highly recommended
                that each applicant informs themselves about the Islamic-related
                laws of marriage and the roles/responsibilities each gender has.
              </p>
            </div>
            <div className="matrimonial-image">
              <img
                src={matrimonialImage}
                alt="Matrimonial Service"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matrimonial;
