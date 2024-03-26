import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function Register() {

    const [formData, setFormData] = useState({ first_name: "", last_name: "", dob: "" ,email: "", phone_no: "" , city: "",district:"", pincode:""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.first_name}, Email: ${formData.email}`);

        //axios here

    };

    /*
    function register_request(formData){
        var name=formData.get("first_name")
        alert('click: '+name)
    }
    */

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>

            <div class="page-wrapper container-login100 font-poppins" style={{ backgroundImage: "url('assets/images/v3.webp')" }} >
                <div class="wrapper wrapper--w680">
                    <nav class="navbar1">
                        <a href="index.html" class="home-btn">Home</a>
                    </nav>
                    <div class="card card-4">
                        <div class="card-body">
                            <h2 class="title">Registration Form</h2>

                            <form onSubmit={handleSubmit}>

                                <div class="row row-space">
                                    <div class="col-2">
                                        <div class="input-group">
                                            <label class="label">first name</label>
                                            <input class="input--style-4" type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="input-group">
                                            <label class="label">last name</label>
                                            <input class="input--style-4" type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-space">
                                    <div class="col-2">
                                        <div class="input-group">
                                            <label class="label">DOB</label>
                                            <div class="input-group-icon">
                                                <input class="input--style-4 js-datepicker" type="text" name="birthday" value={formData.dob} onChange={handleChange} />
                                                <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="input-group">
                                            <label class="label">Gender</label>

                                            <div class="p-t-10">
                                                <br />
                                                <label class="radio-container m-r-45">Male
                                                    <input type="radio" name="gender" />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="radio-container">Female
                                                    <input type="radio" name="gender" />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-space">
                                    <div class="col-2">
                                        <div class="input-group">
                                            <label class="label">Email</label>
                                            <input class="input--style-4" type="email" name="email" value={formData.email} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="input-group">
                                            <label class="label">Phone Number</label>
                                            <input class="input--style-4" type="text" name="phone" value={formData.phone_no} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-space">
                                    <div class="col-2">
                                        <div class="input-group">
                                            <label class="label">City</label>
                                            <input class="input--style-4" type="text" name="City" value={formData.city} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="input-group">
                                            <label class="label">District</label>
                                            <input class="input--style-4" type="text" name="District" value={formData.district} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">Pincode</label>
                                        <input class="input--style-4" type="text" name="Pincode" value={formData.pincode} onChange={handleChange} />
                                    </div>
                                </div>

                                <div class="container-login100-form-btn">
                                    <button class="login100-form-btn" type="submit">
                                        Submit
                                    </button>
                                </div>

                                <div class="text-center p-t-90">
                                    <a class="txt1" href="login.html">
                                        login
                                    </a>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;