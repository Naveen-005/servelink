import React from 'react'
import './terms.css'
import { Helmet } from 'react-helmet';

function Privacy() {
  return (
    <div className='terms1'>
      <Helmet>
        <title>
          Privacy
        </title>
      </Helmet>
      <div id="abc">
        <h1 className="clr">Privacy</h1>
        <p className="clr"> Respecting your privacy is fundamental to us. 
            When you use our platform, we may collect personal information such as your name, email, 
            and location to create and maintain user accounts, as well as facilitate connections between volunteers and organizations. 
            Rest assured, this information is used solely for these purposes and is safeguarded with appropriate security measures
             to prevent unauthorized access or disclosure. We may also collect usage data to improve
              our platform's performance and user experience. Your privacy rights are important to us,
               and you have the right to access, update, or delete your personal information. 
               For any questions or concerns regarding your privacy or our practices, please don't hesitate to contact us.
                We are committed to complying with applicable data protection laws and regulations and will
                 notify you of any updates to our privacy policy.
    </p>
    
                </div>
    </div>
  )
}

export default Privacy;