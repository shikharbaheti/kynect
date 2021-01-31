import { Form, Col, Button, Container } from "react-bootstrap";
import React, { Component } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import axios from 'axios'
import "./Builder.css"

function Builder() {
	const { register, handleSubmit, watch, errors } = useForm();
  	const onSubmit = data => {axios({
		method: 'post',
		url: 'http://localhost:8080/',
		headers: {'Access-Control-Allow-Origin': "*"}, 
		data: {
		  data, // This is the body part
		}
	  });
	}
  	console.log(watch("example"));
    return (
        <div className="Builder">
			<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
    	{/* register your input into the hook by invoking the "register" function */}
      	{/* <input name="example" defaultValue="test" ref={register} /> */}
				<h2>Personal Information</h2>				
		<Form.Row>
		
		<Form.Group as={Col} controlId="FirstName">
		<Form.Label>First Name</Form.Label>
		<Form.Control name="firstName" ref={register} type="text" placeholder="Enter First Name" />
		</Form.Group>

		<Form.Group as={Col} controlId="LastName">
		<Form.Label>Last Name</Form.Label>
		<Form.Control name="lastname" ref={register} placeholder="Enter Last Name" />
		</Form.Group>
	</Form.Row>

	<Form.Row>
		
		<Form.Group as={Col} controlId="Email">
		<Form.Label>Email</Form.Label>
		<Form.Control name="email" ref={register} placeholder="Enter Email" />
		</Form.Group>

		<Form.Group as={Col} controlId="Phone">
		<Form.Label>Phone Number</Form.Label>
		<Form.Control name="phone" ref={register} placeholder="123-456-879"/>
		</Form.Group>
	</Form.Row>

	<Form.Group controlId="Address">
		<Form.Label>Address</Form.Label>
		<Form.Control name="address" ref={register} placeholder="1234 Main St" />
	</Form.Group>

	<Form.Row>
		<Form.Group as={Col} controlId="City">
		<Form.Label>City</Form.Label>
		<Form.Control name="city" ref={register} />
		</Form.Group>

		<Form.Group as={Col} controlId="State">
		<Form.Label  >State</Form.Label>
		<Form.Control name="state" ref={register} as="select" defaultValue="Choose...">
		<option value="Choose...">Choose...</option>
		<option value="AL">Alabama</option>
		<option value="AK">Alaska</option>
		<option value="AZ">Arizona</option>
		<option value="AR">Arkansas</option>
		<option value="CA">California</option>
		<option value="CO">Colorado</option>
		<option value="CT">Connecticut</option>
		<option value="DE">Delaware</option>
		<option value="DC">District Of Columbia</option>
		<option value="FL">Florida</option>
		<option value="GA">Georgia</option>
		<option value="HI">Hawaii</option>
		<option value="ID">Idaho</option>
		<option value="IL">Illinois</option>
		<option value="IN">Indiana</option>
		<option value="IA">Iowa</option>
		<option value="KS">Kansas</option>
		<option value="KY">Kentucky</option>
		<option value="LA">Louisiana</option>
		<option value="ME">Maine</option>
		<option value="MD">Maryland</option>
		<option value="MA">Massachusetts</option>
		<option value="MI">Michigan</option>
		<option value="MN">Minnesota</option>
		<option value="MS">Mississippi</option>
		<option value="MO">Missouri</option>
		<option value="MT">Montana</option>
		<option value="NE">Nebraska</option>
		<option value="NV">Nevada</option>
		<option value="NH">New Hampshire</option>
		<option value="NJ">New Jersey</option>
		<option value="NM">New Mexico</option>
		<option value="NY">New York</option>
		<option value="NC">North Carolina</option>
		<option value="ND">North Dakota</option>
		<option value="OH">Ohio</option>
		<option value="OK">Oklahoma</option>
		<option value="OR">Oregon</option>
		<option value="PA">Pennsylvania</option>
		<option value="RI">Rhode Island</option>
		<option value="SC">South Carolina</option>
		<option value="SD">South Dakota</option>
		<option value="TN">Tennessee</option>
		<option value="TX">Texas</option>
		<option value="UT">Utah</option>
		<option value="VT">Vermont</option>
		<option value="VA">Virginia</option>
		<option value="WA">Washington</option>
		<option value="WV">West Virginia</option>
		<option value="WI">Wisconsin</option>
		<option value="WY">Wyoming</option>
		</Form.Control>
		</Form.Group>

		<Form.Group as={Col} controlId="Zip">
		<Form.Label>Zip</Form.Label>
		<Form.Control name="zipcode" ref={register}/>
		</Form.Group>
	</Form.Row>

	<h2>Education</h2>

	<Form.Row>
		<Form.Group as={Col} controlId="Institution">
		<Form.Label>Name of Institution</Form.Label>
		<Form.Control ref={register} name="institution" placeholder="Enter Institution" />
		</Form.Group>

		<Form.Group as={Col} controlId="Degree">
		<Form.Label>Degree</Form.Label>
		<Form.Control ref={register} name="degree" placeholder="Enter Degree" />
		</Form.Group>
	</Form.Row>

	<Form.Group controlId="GPA">
		<Form.Label>GPA</Form.Label>
		<Form.Control ref={register} name="gpa" placeholder="Ex: 3.5/4.0" />
	</Form.Group>

	<Form.Row>
	<Form.Group as={Col} controlId="EducationStartMonth">
		<Form.Label>Start Month</Form.Label>
		<Form.Control ref={register} name="edu_start_month" as="select" defaultValue="Choose...">
			<option>Choose...</option>
		<option value='1'>January</option>
		<option value='2'>February</option>
		<option value='3'>March</option>
		<option value='4'>April</option>
		<option value='5'>May</option>
		<option value='6'>June</option>
		<option value='7'>July</option>
		<option value='8'>August</option>
		<option value='9'>September</option>
		<option value='10'>October</option>
		<option value='11'>November</option>
		<option value='12'>December</option>
		</Form.Control>
		</Form.Group>

		<Form.Group as={Col} controlId="EducationStartYear">
		<Form.Label>Start Year</Form.Label>
		<Form.Control ref={register} name="edu_start_year" placeholder="" />
		</Form.Group>
	</Form.Row>

	<Form.Row>
	<Form.Group as={Col} controlId="EducationEndMonth">
		<Form.Label>End Month</Form.Label>
		<Form.Control ref={register} name="edu_end_month" as="select" defaultValue="Choose...">
			<option>Choose...</option>
		<option value='1'>January</option>
		<option value='2'>February</option>
		<option value='3'>March</option>
		<option value='4'>April</option>
		<option value='5'>May</option>
		<option value='6'>June</option>
		<option value='7'>July</option>
		<option value='8'>August</option>
		<option value='9'>September</option>
		<option value='10'>October</option>
		<option value='11'>November</option>
		<option value='12'>December</option>
		</Form.Control>
		</Form.Group>

		<Form.Group as={Col} controlId="EducationEndYear">
		<Form.Label>End Year</Form.Label>
		<Form.Control ref={register} name="edu_end_year" placeholder="Year or ''Present''" />
		</Form.Group>
	</Form.Row>

	<Form.Row>
		<Form.Group as={Col} controlId="EducationCity">
		<Form.Label>City</Form.Label>
		<Form.Control ref={register} name="eduCity"/>
		</Form.Group>

		<Form.Group as={Col} controlId="EducationState">
		<Form.Label>State</Form.Label>
		<Form.Control ref={register} name="eduState" as="select" defaultValue="Choose...">
		<option value="Choose...">Choose...</option>
		<option value="AL">Alabama</option>
		<option value="AK">Alaska</option>
		<option value="AZ">Arizona</option>
		<option value="AR">Arkansas</option>
		<option value="CA">California</option>
		<option value="CO">Colorado</option>
		<option value="CT">Connecticut</option>
		<option value="DE">Delaware</option>
		<option value="DC">District Of Columbia</option>
		<option value="FL">Florida</option>
		<option value="GA">Georgia</option>
		<option value="HI">Hawaii</option>
		<option value="ID">Idaho</option>
		<option value="IL">Illinois</option>
		<option value="IN">Indiana</option>
		<option value="IA">Iowa</option>
		<option value="KS">Kansas</option>
		<option value="KY">Kentucky</option>
		<option value="LA">Louisiana</option>
		<option value="ME">Maine</option>
		<option value="MD">Maryland</option>
		<option value="MA">Massachusetts</option>
		<option value="MI">Michigan</option>
		<option value="MN">Minnesota</option>
		<option value="MS">Mississippi</option>
		<option value="MO">Missouri</option>
		<option value="MT">Montana</option>
		<option value="NE">Nebraska</option>
		<option value="NV">Nevada</option>
		<option value="NH">New Hampshire</option>
		<option value="NJ">New Jersey</option>
		<option value="NM">New Mexico</option>
		<option value="NY">New York</option>
		<option value="NC">North Carolina</option>
		<option value="ND">North Dakota</option>
		<option value="OH">Ohio</option>
		<option value="OK">Oklahoma</option>
		<option value="OR">Oregon</option>
		<option value="PA">Pennsylvania</option>
		<option value="RI">Rhode Island</option>
		<option value="SC">South Carolina</option>
		<option value="SD">South Dakota</option>
		<option value="TN">Tennessee</option>
		<option value="TX">Texas</option>
		<option value="UT">Utah</option>
		<option value="VT">Vermont</option>
		<option value="VA">Virginia</option>
		<option value="WA">Washington</option>
		<option value="WV">West Virginia</option>
		<option value="WI">Wisconsin</option>
		<option value="WY">Wyoming</option>
		</Form.Control>
		</Form.Group>
	</Form.Row>

	<h2>Work Experience #1 </h2>

	<Form.Row>
		<Form.Group as={Col} controlId="WorkCompanyOne">
		<Form.Label>Company</Form.Label>
		<Form.Control ref={register} name="company1" placeholder="Enter Company" />
		</Form.Group>

		<Form.Group as={Col} controlId="WorkPositionOne">
		<Form.Label>Position</Form.Label>
		<Form.Control ref={register} name="position1" placeholder="Enter Position" />
		</Form.Group>
	</Form.Row>

	<Form.Row>
		<Form.Group as={Col} controlId="WorkCityOne">
		<Form.Label>City</Form.Label>
		<Form.Control ref={register} name="city1" />
		</Form.Group>

		<Form.Group as={Col} controlId="WorkStateOne">
		<Form.Label>State</Form.Label>
		<Form.Control as="select" defaultValue="Choose..." ref={register} name="state1">
		<option value="Choose...">Choose...</option>
		<option value="AL">Alabama</option>
		<option value="AK">Alaska</option>
		<option value="AZ">Arizona</option>
		<option value="AR">Arkansas</option>
		<option value="CA">California</option>
		<option value="CO">Colorado</option>
		<option value="CT">Connecticut</option>
		<option value="DE">Delaware</option>
		<option value="DC">District Of Columbia</option>
		<option value="FL">Florida</option>
		<option value="GA">Georgia</option>
		<option value="HI">Hawaii</option>
		<option value="ID">Idaho</option>
		<option value="IL">Illinois</option>
		<option value="IN">Indiana</option>
		<option value="IA">Iowa</option>
		<option value="KS">Kansas</option>
		<option value="KY">Kentucky</option>
		<option value="LA">Louisiana</option>
		<option value="ME">Maine</option>
		<option value="MD">Maryland</option>
		<option value="MA">Massachusetts</option>
		<option value="MI">Michigan</option>
		<option value="MN">Minnesota</option>
		<option value="MS">Mississippi</option>
		<option value="MO">Missouri</option>
		<option value="MT">Montana</option>
		<option value="NE">Nebraska</option>
		<option value="NV">Nevada</option>
		<option value="NH">New Hampshire</option>
		<option value="NJ">New Jersey</option>
		<option value="NM">New Mexico</option>
		<option value="NY">New York</option>
		<option value="NC">North Carolina</option>
		<option value="ND">North Dakota</option>
		<option value="OH">Ohio</option>
		<option value="OK">Oklahoma</option>
		<option value="OR">Oregon</option>
		<option value="PA">Pennsylvania</option>
		<option value="RI">Rhode Island</option>
		<option value="SC">South Carolina</option>
		<option value="SD">South Dakota</option>
		<option value="TN">Tennessee</option>
		<option value="TX">Texas</option>
		<option value="UT">Utah</option>
		<option value="VT">Vermont</option>
		<option value="VA">Virginia</option>
		<option value="WA">Washington</option>
		<option value="WV">West Virginia</option>
		<option value="WI">Wisconsin</option>
		<option value="WY">Wyoming</option>
		</Form.Control>
		</Form.Group>

	</Form.Row>

	<Form.Group controlId="JobDescriptionOne">
		<Form.Label>Job Description</Form.Label>
		<Form.Control ref={register} name="jobDesc1" placeholder="" />
	</Form.Group>

	<h2>Work Experience #2 </h2>

	<Form.Row>
		<Form.Group as={Col} controlId="WorkCompanyTwo">
		<Form.Label>Company</Form.Label>
		<Form.Control ref={register} name="company2" placeholder="Enter Company" />
		</Form.Group>

		<Form.Group as={Col} controlId="WorkPositionTwo">
		<Form.Label>Position</Form.Label>
		<Form.Control ref={register} name="position2" placeholder="Enter Position" />
		</Form.Group>
	</Form.Row>

	<Form.Row>
		<Form.Group as={Col} controlId="WorkCityTwo">
		<Form.Label>City</Form.Label>
		<Form.Control ref={register} name="city2" />
		</Form.Group>

		<Form.Group as={Col} controlId="WorkStateTwo">
		<Form.Label>State</Form.Label>
		<Form.Control ref={register} name="state2" as="select" defaultValue="Choose...">
		<option value="Choose...">Choose...</option>
		<option value="AL">Alabama</option>
		<option value="AK">Alaska</option>
		<option value="AZ">Arizona</option>
		<option value="AR">Arkansas</option>
		<option value="CA">California</option>
		<option value="CO">Colorado</option>
		<option value="CT">Connecticut</option>
		<option value="DE">Delaware</option>
		<option value="DC">District Of Columbia</option>
		<option value="FL">Florida</option>
		<option value="GA">Georgia</option>
		<option value="HI">Hawaii</option>
		<option value="ID">Idaho</option>
		<option value="IL">Illinois</option>
		<option value="IN">Indiana</option>
		<option value="IA">Iowa</option>
		<option value="KS">Kansas</option>
		<option value="KY">Kentucky</option>
		<option value="LA">Louisiana</option>
		<option value="ME">Maine</option>
		<option value="MD">Maryland</option>
		<option value="MA">Massachusetts</option>
		<option value="MI">Michigan</option>
		<option value="MN">Minnesota</option>
		<option value="MS">Mississippi</option>
		<option value="MO">Missouri</option>
		<option value="MT">Montana</option>
		<option value="NE">Nebraska</option>
		<option value="NV">Nevada</option>
		<option value="NH">New Hampshire</option>
		<option value="NJ">New Jersey</option>
		<option value="NM">New Mexico</option>
		<option value="NY">New York</option>
		<option value="NC">North Carolina</option>
		<option value="ND">North Dakota</option>
		<option value="OH">Ohio</option>
		<option value="OK">Oklahoma</option>
		<option value="OR">Oregon</option>
		<option value="PA">Pennsylvania</option>
		<option value="RI">Rhode Island</option>
		<option value="SC">South Carolina</option>
		<option value="SD">South Dakota</option>
		<option value="TN">Tennessee</option>
		<option value="TX">Texas</option>
		<option value="UT">Utah</option>
		<option value="VT">Vermont</option>
		<option value="VA">Virginia</option>
		<option value="WA">Washington</option>
		<option value="WV">West Virginia</option>
		<option value="WI">Wisconsin</option>
		<option value="WY">Wyoming</option>
		</Form.Control>
		</Form.Group>

	</Form.Row>

	<Form.Group controlId="JobDescriptionTwo">
		<Form.Label>Job Description</Form.Label>
		<Form.Control ref={register} name="jobDesc2" placeholder="" />
	</Form.Group>

	<h2>Work Experience #3 </h2>

	<Form.Row>
		<Form.Group as={Col} controlId="WorkCompanyThree">
		<Form.Label>Company</Form.Label>
		<Form.Control ref={register} name="company3" placeholder="Enter Company" />
		</Form.Group>

		<Form.Group as={Col} controlId="WorkPositionThree">
		<Form.Label>Position</Form.Label>
		<Form.Control ref={register} name="position3" placeholder="Enter Position" />
		</Form.Group>
	</Form.Row>

	<Form.Row>
		<Form.Group as={Col} controlId="WorkCityThree">
		<Form.Label>City</Form.Label>
		<Form.Control ref={register} name='city3'/>
		</Form.Group>

		<Form.Group as={Col} controlId="WorkStateThree">
		<Form.Label>State</Form.Label>
		<Form.Control ref={register} name='state3' as="select" defaultValue="Choose...">
		<option value="Choose...">Choose...</option>
		<option value="AL">Alabama</option>
		<option value="AK">Alaska</option>
		<option value="AZ">Arizona</option>
		<option value="AR">Arkansas</option>
		<option value="CA">California</option>
		<option value="CO">Colorado</option>
		<option value="CT">Connecticut</option>
		<option value="DE">Delaware</option>
		<option value="DC">District Of Columbia</option>
		<option value="FL">Florida</option>
		<option value="GA">Georgia</option>
		<option value="HI">Hawaii</option>
		<option value="ID">Idaho</option>
		<option value="IL">Illinois</option>
		<option value="IN">Indiana</option>
		<option value="IA">Iowa</option>
		<option value="KS">Kansas</option>
		<option value="KY">Kentucky</option>
		<option value="LA">Louisiana</option>
		<option value="ME">Maine</option>
		<option value="MD">Maryland</option>
		<option value="MA">Massachusetts</option>
		<option value="MI">Michigan</option>
		<option value="MN">Minnesota</option>
		<option value="MS">Mississippi</option>
		<option value="MO">Missouri</option>
		<option value="MT">Montana</option>
		<option value="NE">Nebraska</option>
		<option value="NV">Nevada</option>
		<option value="NH">New Hampshire</option>
		<option value="NJ">New Jersey</option>
		<option value="NM">New Mexico</option>
		<option value="NY">New York</option>
		<option value="NC">North Carolina</option>
		<option value="ND">North Dakota</option>
		<option value="OH">Ohio</option>
		<option value="OK">Oklahoma</option>
		<option value="OR">Oregon</option>
		<option value="PA">Pennsylvania</option>
		<option value="RI">Rhode Island</option>
		<option value="SC">South Carolina</option>
		<option value="SD">South Dakota</option>
		<option value="TN">Tennessee</option>
		<option value="TX">Texas</option>
		<option value="UT">Utah</option>
		<option value="VT">Vermont</option>
		<option value="VA">Virginia</option>
		<option value="WA">Washington</option>
		<option value="WV">West Virginia</option>
		<option value="WI">Wisconsin</option>
		<option value="WY">Wyoming</option>
		</Form.Control>
		</Form.Group>

	</Form.Row>

	<Form.Group controlId="JobDescriptionThree">
		<Form.Label>Job Description</Form.Label>
		<Form.Control ref={register} name='jobDesc3' placeholder="" />
	</Form.Group>

	<h2>Skills</h2>
	<p>Please write your skills in a comma-separated format.</p>
	<Form.Group controlId="skills">
		<Form.Control ref={register} name='skills' placeholder="JavaScript, C++, Python..." />
	</Form.Group>

	<Button variant="primary" type="submit" >
		Submit
	</Button>
	</Form>
	</Container>
	</div>
    );
}

export default Builder;  