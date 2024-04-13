import { color } from 'framer-motion';
import React,{useState} from 'react'
import { Helmet } from 'react-helmet';


function Event_details() {

        const [enrolled, setEnrolled] = useState(0); 
    
        const handleEnroll = () => {
            // Logic to enroll user, e.g., API call
            setEnrolled(enrolled + 1); // Increment enrolled count for demo purposes
        };

        const listStyle = {
            paddingLeft: '20px', // Adjust the indentation as needed
            listStyle: 'none', // Remove default list styles
        };
        
        
    
        return (
            
            <div className="container77" style={containerStyle77}>
                 <Helmet>
                 <title>EventDetails</title>
                 </Helmet>
                <div className="content" style={contentStyle77}>
                    <div className="column1" style={coloumnStyle77}>
                        <img src="" alt="Event" style={imageStyle77} />
                    </div>
                    <div className="divider" style={dividerStyle}></div>
                    <div className="column2" style={coloumnStyle78}>
                    <button onClick={() => alert('Closing the page')} style={closeButtonStyle77}>X</button>
                        <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: 'green' }}>Event Name</h2>
                        <p>Hosted by : Company Name <br/>PostedDate  :Date <br/> LastDate :Date</p>
                        
                        <div style={descriptionStyle77}>
                            <p>Description: Long description of the event...
                            Marion Eggelby sat talking to Clovis on the only subject that she ever willingly talked about - her offspring and their varied perfections and accomplishments. Clovis was not in what could be called a receptive mood; the younger generation of Eggelby, depicted in the glowing improbable colours of parent impressionism, aroused in him no enthusiasm. Mrs. Eggelby, on the other hand, was furnished with enthusiasm enough for two.

"You would like Eric," she said, argumentatively rather than hopefully. Clovis had intimated very unmistakably that he was unlikely to care extravagantly for either Amy or Willie. "Yes, I feel sure you would like Eric. Every one takes to him at once. You know, he always reminds me of that famous picture of the youthful David - I forget who it's by, but it's very well known."

"That would be sufficient to set me against him, if I saw much of him," said Clovis. "Just imagine at auction bridge, for instance, when one was trying to concentrate one's mind on what one's partner's original declaration had been, and to remember what suits one's opponents had originally discarded, what it would be like to have some one persistently reminding one of a picture of the youthful David. It would be simply maddening. If Eric did that I should detest him."

"Eric doesn't play bridge," said Mrs. Eggelby with dignity.


                            </p>
                        </div>
                        <div style={conditionsStyle77}>
                            <p>Conditions for Volunteers:
                            <ul style={listStyle}>
                                <li>Male or Female volunteers preferred.</li>
                                <li>Age groups: 18-50</li>
                                <li>Location: Event Location</li>
                                <li>Qualifications: Relevant qualifications if required</li>
                            </ul>
                            </p>
                        </div>
                        <div style={enrollmentStyle77}>
                            <p>Enrolled: {enrolled}/100</p>
                            <input type="range" min="0" max="100" value={enrolled} style={rangeStyle77} readOnly />
                            <button onClick={handleEnroll} style={enrollButtonStyle7}>Enroll</button>
                        </div>
                    </div>
                </div>
            </div>
        );
}
    
    // Inline CSS styles
    const containerStyle77 = {
        margin: '3% auto ',
        width: '80%',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        padding: '20px',
    };
    
    const contentStyle77 = {
        display: 'flex',
    };
    
    const coloumnStyle77 = {
        flex: '1',
        padding: '10px',
        backgroundColor:"green"
    };
    
    const coloumnStyle78  = {
        flex: '1',
        padding: '10px',
        
    };

    const imageStyle77 = {
        maxWidth: '100%',
    };
    
    const descriptionStyle77 = {
        backgroundColor: '#f2f2f2',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
    };
    
    const conditionsStyle77 = {
        marginBottom: '10px',
    };
    
    const enrollmentStyle77 = {
        textAlign: 'center',
    };
    
    const rangeStyle77 = {
        width: '80%',
        
        
    };
    
    const enrollButtonStyle7 = {
        marginTop: '8px ',
        backgroundColor:'green',
        borderRadius:'25% ',
        padding:'2%',
        color:'white',
       
    };
    
    const closeButtonStyle77 = {
        position: 'absolute',
        top: '8%',
        right: '11%',
    };

    const dividerStyle = {
        height: '100%',
        width: '1px',
        backgroundColor: 'black',
        margin: '4%', // Adjust the margin as needed
       
    };


export default Event_details;
