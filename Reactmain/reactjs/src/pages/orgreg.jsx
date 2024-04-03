import React, { useEffect,useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link,useNavigate } from 'react-router-dom';
import config from '../config.json';
import axios from 'axios';


function Orgreg() {

	const [formData, setFormData] = useState({
        name: "",
		address: "",
		district: "",
		country: "",
        email: "",
        password:"",

    });

	const navigate = useNavigate();


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

	const handleSubmit = (event) => {
        event.preventDefault();
        
        axios({
            method: 'post',
            url: config.server_api_url + '/register/organization',
            data: formData
            })
            .then((res) => {
                localStorage.setItem('name', res.data.name);
                localStorage.setItem('uid', res.data.uid);
                localStorage.setItem('token', res.data.token);
				alert("Succesfully registered")
                navigate("/")

            })
            .catch((err) => {
                console.log(err)
                alert("Registraation failed")
        });
	};

    useEffect(() => {
        AOS.init(); 
    }, []);

  return (
    <div>
       <div className="limiter">
		<div className="container-login1000">
			<div className="wrap-login1000">
				<form className="login1000-form validate-form" onSubmit={handleSubmit}>
					<span className="login1000-form-title p-b-43">
						REGISTER
					</span>
					
					
					<div className="wrap-input1000 validate-input" data-validate = "name">
						<input className="input1000" type="text" name="name" value={formData.name} onChange={handleChange}/>
						<span className="focus-input1000"></span>
						<span className="label-input1000">Organization Name</span>
					</div>

					
					<div className="wrap-input1000 validate-input" data-validate = "Address">
						<input className="input1000" type="text" name="address" value={formData.address} onChange={handleChange}/>
						<span className="focus-input1000"></span>
						<span className="label-input1000">Address</span>
					</div>
					
					
					<div className="wrap-input1000 validate-input" data-validate = "District">
						<input className="input1000" type="text" name="district" value={formData.district} onChange={handleChange}/>
						<span className="focus-input1000"></span>
						<span className="label-input1000">District</span>
					</div>
					
					
					<div className="wrap-input1000 validate-input" data-validate = "Country">
						<input className="input1000" type="text" name="country" value={formData.country} onChange={handleChange}/>
						<span className="focus-input1000"></span>
						<span className="label-input1000">Country</span>
					</div>
					
					
					<div className="wrap-input1000 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input1000" type="text" name="email" value={formData.email} onChange={handleChange}/>
						<span className="focus-input1000"></span>
						<span className="label-input1000">Email</span>
					</div>
					
					
				   
					<div className="wrap-input1000 validate-input" data-validate="Password is required">
						<input className="input1000" type="password" name="password" value={formData.password} onChange={handleChange}/>
						<span className="focus-input1000"></span>
						<span className="label-input1000">Password</span>
					</div>

					

					<div className="container-login1000-form-btn">
						<button className="login1000-form-btn" type="submit">
							Register
						</button>
					</div>
					
					<Link className="txt1 " to="/orglog" style={{textDecoration:"none"}} >Login? </Link>
						
						
					
					
					
				</form>

				<div className="login1000-more" style={{backgroundImage: "url('assets/images/13.jpg')"}}>
					<nav className="navbar1">
						
						<Link className="home-btn" to="/" style={{ textDecoration: 'none', color: '#2a5834',position:'relative',left:'170%'}} >Home</Link>
						<br/>
						</nav>
				</div>
			</div>
		</div>
	</div>
	
	
    </div>

    )
}
 export default Orgreg