
function Org_Event({ evnt }) {
    return (


        <div className="container10" style={containerStyle10}>
            {/* Post content goes here */}
            
            <div>
                <h2>{evnt.title}</h2>
                <p>{evnt.short_description}</p>
                {/* Other post elements */}
                <progress
                                value={evnt.enrolled}
                                max={evnt.required}
                ></progress>
            </div>
        </div>

    );

}

const containerStyle10 = {
    margin: '3% auto ',
    width: '50%',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    padding: '100px',
    color: 'red',
    backgroundColor: 'white',
  };

export default Org_Event;