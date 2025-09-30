import "./TermsOfUse.css"; // Add styles for this component
import SEO from './SEO';


const TermsOfUse = () => {
  return (
    <>
      <SEO 
        title="ICSGV | Terms of Use and Privacy Policies"
        imageType="image/webp"
        priority="high"
        description="Terms of Use and Privacy Policies."
      />
      <div className="main">
        <div className="wrapper">
          <h5 className="assalamualaikum">Assalamualaikum</h5>
          <h1 className="welcome">
            Welcome to the Islamic Center of San Gabriel Valley (ICSGV)
          </h1>
          <div className="clinic-container">
            <div className="clinic-section">
              <div className="clinic-text">
                <h5 style={{ color: "#000" }}>
                Terms of Use and Privacy Policies
                </h5>
                <p>The Islamic Center of San Gabriel Valley (ICSGV) is committed to protecting your privacy and ensuring transparent data practices.</p>
                <h2 style={{ color: "#000" }}>
                Data Collection and Usage
                </h2>
                <p>
                  Our website collects certain information to improve your experience and provide our services. This includes personal information you voluntarily provide (such as name, email address, and contact details when making donations or registering for events), device information (browser type, IP address, and cookies), and usage data that helps us understand how visitors interact with our site. When using our API services, we may collect and store user identifiers, authentication tokens, usage patterns, and service-specific data necessary for functionality. All collected information is stored securely using industry-standard encryption and is only retained for the period necessary to fulfill the purposes outlined in this policy. We do not sell your personal information to third parties and only share data with service providers who help us operate our website and deliver our services, always subject to confidentiality obligations.
                </p>
                <h2 style={{ color: "#000" }}>
                Device Information and Cookies
                </h2>
                <p>
                  Our website and its integrated services (including YouTube API Services) may store and access information on your device through cookies and similar technologies. These technologies help us:
                </p>
                <ul className="privacy-list" style={{ marginBottom: "20px", color: "#000" }}>
                  <li>Remember your preferences and settings</li>
                  <li>Maintain your session security</li>
                  <li>Analyze how you interact with our video content</li>
                  <li>Improve website performance and functionality</li>
                </ul>
                <p>
                  Third-party services we use, including Google's YouTube API Services, may also place their own cookies or similar tracking technologies on your device. These third-party cookies are subject to their respective privacy policies. You can manage cookie preferences through your browser settings, though disabling certain cookies may limit some website functionality.
                </p>
                <h2 style={{ color: "#000" }}>
                YouTube Data Storage and Updates
                </h2>
                <p>
                  To provide you with the best experience while using our live streaming and video features, we handle YouTube API data in the following ways:
                </p>
                <ul className="privacy-list" style={{ marginBottom: "20px", color: "#000" }}>
                  <li><strong>Live Stream Status:</strong> We check and update live stream status every minute to ensure you have current information about our broadcasts.</li>
                  <li><strong>Recent Videos:</strong> We cache recent video information for up to one hour to improve performance and reduce API calls. This includes basic video details and statistics like view counts and likes.</li>
                  <li><strong>Session Storage:</strong> Live stream status is stored in your browser's session storage and is cleared when you close your browser.</li>
                  <li><strong>Local Storage:</strong> Recent video data is stored in your browser's local storage and is automatically refreshed after one hour.</li>
                  <li><strong>Data Deletion:</strong> All stored YouTube API data is automatically cleared when you close your browser session or after the cache duration expires. You can also manually clear this data by clearing your browser cache.</li>
                </ul>
                <p>
                  We do not permanently store any YouTube API data on our servers. All data is temporarily cached in your browser for performance optimization and is regularly updated to ensure accuracy.
                </p>

                <h2 style={{ color: "#000" }}>
                Your Rights and Choices
                </h2>
                <p>
                  You have the right to access, correct, or delete your personal information at any time. You may also opt out of certain data collection by adjusting your browser settings to refuse cookies or by contacting us directly. For questions about our data practices or to exercise your rights regarding your information, please contact us at <a href="mailto:administration@icsgv.com" style={{ color: "#13547a", textDecoration: "underline" }}>administration@icsgv.com</a>.
                </p>
                
                <h2 style={{ color: "#000" }}>
                How We Process and Share Your Information
                </h2>
                <p>
                  When you use our website and its features that integrate with YouTube API Services, we process your information in the following ways:
                </p>
                <ul className="privacy-list" style={{ marginBottom: "20px", color: "#000" }}>
                  <li><strong>Internal Processing:</strong> We analyze usage patterns to improve our website functionality, personalize content based on your preferences, and ensure our services meet community needs.</li>
                  <li><strong>Service Providers:</strong> We may share limited data with third-party service providers who help us operate our website, process donations, or manage event registrations. These providers are contractually obligated to use your information solely for providing services to us.</li>
                  <li><strong>YouTube API Services:</strong> When you interact with YouTube content on our site, information about your interactions may be collected by Google. This data is processed according to Google's Privacy Policy.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                </ul>
                <p>
                  We implement strict data protection measures and do not sell, rent, or trade your personal information to third parties for marketing purposes. Any third-party services we use to enhance your experience (such as donation processing or video streaming) only receive the minimum information necessary to provide their services.
                </p>
              </div>
              <div className="clinic-image">
              </div>
            </div>
            <div className="clinic-section">
              <div className="clinic-image">
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
  );
};

export default TermsOfUse;
