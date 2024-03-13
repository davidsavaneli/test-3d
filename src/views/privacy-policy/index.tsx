import React from 'react'
import { ContentPageLayout, AnimatedTitle } from 'components'

const View = () => {
  return (
    <div className='container'>
      <ContentPageLayout
        title={
          <AnimatedTitle size='medium' autoWidth disableX>
            Privacy Policy
          </AnimatedTitle>
        }
        text={`
          <p>Last Updated: 13.03.2024</p>
          <br /><br />
          <h3>Introduction</h3>
          <p>At Techzy, we are committed to revolutionizing the software development landscape. In line with our vision to empower businesses and individuals through innovative technologies, and our mission to deliver exceptional software solutions, we prioritize the privacy and security of our clients' data. This privacy policy outlines our practices regarding the collection, use, and protection of personal information.</p>
          <br /><br />
          <h3>Information Collection</h3>
          <p>We collect the following personal information from our users:</p>
          <ul>
            <li>Names</li>
            <li>Company names</li>
            <li>Mobile numbers</li>
            <li>Email addresses</li>
          </ul>
          <p>This information is essential for scheduling calls, aligning our services with our clients' needs, and providing personalized service.</p>
          <br /><br />
          <h3>Use of Information</h3>
          <p>The information collected is solely used for:</p>
          <ul>
            <li>Scheduling and conducting business calls.</li>
            <li>Aligning our services with your business needs.</li>
            <li>Communicating updates and information relevant to our services.</li>
          </ul>
          <br /><br />
          <h3>Data Security</h3>
          <p>We take the security of your data seriously. User data is stored on secure servers provided by Amazon and Microsoft, ensuring robust protection against unauthorized access, alteration, or destruction.</p>
          <br /><br />
          <h3>User Rights</h3>
          <p>In compliance with the General Data Protection Regulation (GDPR), users have the right to:</p>
          <ul>
            <li>Access their personal data.</li>
            <li>Request correction or deletion of their data.</li>
            <li>Withdraw consent for data processing (where applicable).</li>
            <li>Lodge a complaint with a supervisory authority.</li>
          </ul>
          <br /><br />
          <h3>Information Sharing</h3>
          <p>The information collected remains strictly within Techzy and is not shared with any third parties, except as required by law.</p>
          <br /><br />
          <h3>International Data Transfers</h3>
          <p>We comply with GDPR standards for international data transfers, ensuring the same level of data protection regardless of where our clients are located.</p>
          <br /><br />
          <h3>Policy Updates</h3>
          <p>This privacy policy may be updated periodically to reflect changes in our practices or relevant laws. We will notify users of any significant changes through our website or via direct communication.</p>
          <br /><br />
          <h3>Contact Us</h3>
          <p>If you have any questions or concerns about this privacy policy or our data handling practices, please contact us at <a href='mailto:contact@techzy.app' target='_blank'>contact@techzy.app</a>.</p>
          `}
      />
    </div>
  )
}

export default View
