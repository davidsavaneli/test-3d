import React from 'react'
import { ContentPageLayout, AnimatedTitle } from 'components'

const View = () => {
  return (
    <div className='container'>
      <ContentPageLayout
        title={
          <AnimatedTitle size='medium' autoWidth disableX>
            Terms & Conditions
          </AnimatedTitle>
        }
        text={`
          <h3>1. Introduction</h3>
          <p>Welcome to Techzy. By accessing our software development services, you agree to these Terms and Conditions, which are designed to ensure a productive and secure experience for all users.</p>
          <br /><br />
          <h3>2. Use of Services</h3>
          <p>Services provided by Techzy are primarily for business and professional use.</p>
          <p>Users must provide accurate and current information for effective service delivery.</p>
          <p>Services must be used in compliance with all applicable laws and regulations.</p>
          <br /><br />
          <h3>3. Account Registration and Security</h3>
          <p>Users are responsible for maintaining the confidentiality of account information.</p>
          <p>Techzy reserves the right to terminate accounts for any misuse or fraudulent activities.</p>
          <br /><br />
          <h3>4. Intellectual Property Rights</h3>
          <p>All materials and services provided by Techzy are the intellectual property of Techzy or its licensors.</p>
          <p>Users are granted a non-exclusive, non-transferable license to use the software as per the agreement.</p>
          <br /><br />
          <h3>5. Data Protection and Privacy</h3>
          <p>Refer to our Privacy Policy for details on data collection and usage.</p>
          <p>User data is stored on secure servers and is protected in accordance with GDPR standards.</p>
          <br /><br />
          <h3>6. User Obligations</h3>
          <p>Users must not misuse the services offered by Techzy in any manner.</p>
          <p>Compliance with data protection laws when handling personal data obtained through our services is mandatory.</p>
          <br /><br />
          <h3>7. Limitation of Liability</h3>
          <p>Techzy is not liable for any indirect, incidental, or consequential damages arising from the use of its services.</p>
          <br /><br />
          <h3>8. Modifications to Services</h3>
          <p>Techzy reserves the right to modify or discontinue services with prior notice.</p>
          <br /><br />
          <h3>9. Governing Law</h3>
          <p>These Terms and Conditions are governed by the laws of the jurisdiction where Techzy operates.</p>
          <br /><br />
          <h3>10. Amendments to Terms</h3>
          <p>Techzy may update these Terms and Conditions periodically. Users will be notified of significant changes.</p>
          <br /><br />
          <h3>11. Contact Information</h3>
          <p>For any queries regarding these Terms and Conditions, please contact us at <a href='mailto:contact@techzy.app' target='_blank'>contact@techzy.app</a>.</p>
          `}
      />
    </div>
  )
}

export default View
