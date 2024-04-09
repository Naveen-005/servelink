import React, { useEffect,useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link,useNavigate } from 'react-router-dom';
import config from '../../config.json';
import axios from 'axios';
import './assets/css/util22.css'
import './assets/css/main22.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './assets/fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import './assets/vendor/animate/animate.css'
import './assets/vendor/css-hamburgers/hamburgers.min.css'
import './assets/vendor/animsition/css/animsition.min.css'
import './assets/vendor/select2/select2.min.css'



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
                document.cookie = `name=${res.data.name};`;
        		document.cookie = `uid=${res.data.uid};`;
        		document.cookie = `token=${res.data.token};`;
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
       <div className="limiter5">
		<div className="container13-login10013">
			<div className="wrap13-login10013">
				<form className="login10013-form13 validate-form13" onSubmit={handleSubmit}>
					<span className="login10013-form13-title p-b-43">
						REGISTER
					</span>
					
					
					<div className="wrap13-input100013 validate-input" data-validate = "name">
					<label>Organization Name</label>
						<input className="input100013" type="text" name="name" value={formData.name} onChange={handleChange}/>
						<span className="focus-input100013"></span>
						{/*<span className="label-input100013">Organization Name</span>*/}
					</div>
					
					<div className="wrap13-input100013 validate-input" data-validate = "Address">
					<label>Address</label>
						<input className="input100013" type="text" name="address" value={formData.address} onChange={handleChange}/>
						<span className="focus-input100013"></span>
						{/*<span className="label-input100013">Address</span>*/}
					</div>
					
					
					<div className="wrap13-input100013 validate-input" data-validate = "District">
					<label>District</label>
						<input className="input100013" type="text" name="district" value={formData.district} onChange={handleChange}/>
						<span className="focus-input100013"></span>
						{/*<span className="label-input100013">District</span>*/}
					</div>
					
					
					<div className="wrap13-input100013 validate-input" data-validate = "Country">
					<label>Country</label>
						<input className="input100013" type="text" name="country" value={formData.country} onChange={handleChange}/>
						<span className="focus-input100013"></span>
						{/*<span className="label-input100013">Country</span>*/}
					</div>
					
					
					<div className="wrap13-input100013 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<label>Email</label>
						<input className="input100013" type="text" name="email" value={formData.email} onChange={handleChange}/>
						<span className="focus-input100013"></span>
						{/*<span className="label-input100013">Email</span>*/}
					</div>
					
					
				   
					<div className="wrap13-input100013 validate-input" data-validate="Password is required">
					<label>Password</label>
						<input className="input100013" type="password" name="password" value={formData.password} onChange={handleChange}/>
						<span className="focus-input100013"></span>
						{/*<span className="label-input100013">Password</span>*/}
					</div>

					

					<div className="container13-login10013-form13-btn13">
						<button className="login10013-form13-btn13" type="submit">
							Register
						</button>
					</div>
					
					
					<Link className="txt12 " to="/login-organization" style={{textDecoration:"none",color:'gray'}} >Login? </Link>
					
					
					
					
				</form>

				<div className="login10013-more" style={{backgroundImage: "url('assets/images/13.jpg')"}}>
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