import React from 'react';
import '../stylesheets/Contact.css';
import linkedin from '../images/linkedin.png';
import message from '../images/message.png';
import resume from '../images/personal-profile.png';
import phone from '../images/phone-call.png';
import twitter from '../images/twitter.png';

export const Contact = () => (
    <div className='contactPage'>
        <p> LET'S CONNECT </p>
    <div className='contact' >
        <div className='contactIcon'> <a href='https://www.linkedin.com/in/ledet-awano/' target='_blank'> <img className='icon' src={linkedin} />  </a> </div> 
        <div className='contactIcon'> <a href='mailto:ledet2016@gmail.com' target='_blank' > <img className='icon' src={message} /> </a> </div>
        <div className='contactIcon'> <a href='https://resume.creddle.io/resume/d9t8szk4owu' target='_blank' > <img className='icon' src={resume} /> </a> </div>
        <div className='contactIcon'> <a href='tel:2145664108' target='_blank' > <img className='icon' src={phone} /> </a> </div>
        <div className='contactIcon'> <a href='https://twitter.com/awnn111' target='_blank' > <img className='icon' src={twitter} /> </a> </div>
    </div>
    </div>
)

{/* <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}