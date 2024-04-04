

function Event({evnt}) {

    var percent=(evnt.enrolled/evnt.required)*100

    return (

        <div class="col-lg-3 col-md-4">
            <div class="causes-item bg-white">
                <img src={evnt.img_url} alt="Image" class="img-fluid mb-4 rounded" />
                <div class="px-4 pb-3 pt-3" style={{ height: '300px' }}>
                    <span class="date">{evnt.date}</span>
                    <h3><a href="#" style={{ textDecoration: 'none', color: "#2a5834" }}>{evnt.title}</a></h3>
                    <p>{evnt.description}</p>

                    <div class="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: `${percent}%`, backgroundColor: '#2a5834' }} aria-valuenow={evnt.enrolled} aria-valuemin="0" aria-valuemax={evnt.required}>{evnt.enrolled}/{evnt.required}</div>
                    </div>
                    <br />
                    <button type="button" class="btn btn-success float-end" >Enroll</button>
                </div>
            </div>
        </div>


    );

}

export default Event;