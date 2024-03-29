import React from 'react'

function profile() {
  return (
    <div>
         <section class="h-100 gradient-custom-2">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-lg-9 col-xl-12">
                    <div class="card">
                        <div class="rounded-top text-white d-flex flex-row"
                            style={{backgroundColor: '#000', height:'200px'}}>
                            <div class="ms-4 mt-5 d-flex flex-column" style={{width:'150px'}}>
                                <img src={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"}
                                    alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                                    style={{width: '150px', zIndex:'1'}}/>
                                    {/*
                                <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark"
                                    style="z-index: 1;">
                                    Edit profile
                                </button>
                                */}
                            </div>
                            <div class="ms-3" style={{marginTop: '130px'}}>
                                <h5>Andy Horwitz</h5>
                                <p>Level 5</p>
                            </div>
                        </div>
                        <div class="p-4 text-black" style={{backgroundColor: '#f8f9fa'}}>
                          
                            <div class="d-flex justify-content-end text-center py-1">
                                <div>
                                    <p class="mb-1 h5">23</p>
                                    <p class="small text-muted mb-0">Events</p>
                                </div>
                                <div class="px-3">
                                    <p class="mb-1 h5">4</p>
                                    <p class="small text-muted mb-0">Achievments</p>
                                </div>
                                <div>
                                    <p class="mb-1 h5">106 Hrs</p>
                                    <p class="small text-muted mb-0">Volunteering</p>
                                </div>
                            </div>
                        
                        <p class="pt-5">Special Skill: Cooking</p>
                        </div>
                        <div class="card-body p-4 text-black">
                            <div class="mb-5">
                                <p class="lead fw-normal mb-1">Achievments</p>
                                <div class="p-4" style={{backgroundColor: '#f8f9fa'}}>
                                 
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <p class="lead fw-normal mb-0">Photos from recent events</p>
                                <p class="mb-0"><a href="#!" class="text-muted">Show all</a></p>
                            </div>
                            <div class="row g-2">
                                <div class="col mb-2">
                                    <img src={"assets/images/img_pp_1.jpg"}
                                        alt="image 1" class="w-100 rounded-3" style={{height:'400px'}}/>
                                </div>
                                <div class="col mb-2">
                                    <img src={"assets/images/img_pp_2.jpg"}
                                        alt="image 1" class="w-100 rounded-3" style={{height:'400px'}}/>
                                </div>
                            </div>
                            <div class="row g-2">
                                <div class="col">
                                    <img src={"assets/images/img_pp_3.jpg"}
                                        alt="image 1" class="w-100 rounded-3" style={{height:'400px'}}/>
                                </div>
                                <div class="col">
                                    <img src={"assets/images/img_pp_4.jpg"}
                                        alt="image 1" class="w-100 rounded-3" style={{height:'400px'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </div>
  )
}

export default profile
