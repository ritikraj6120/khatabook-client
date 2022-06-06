import React, { useState } from 'react'
import { Link,useHistory } from "react-router-dom";
import { addCustomer } from '../../../actions/customerAction';
import { useDispatch } from 'react-redux';

import { notifyWarning } from '../../../alert';
import 'react-phone-number-input/style.css'
import PhoneInput, { isPossiblePhoneNumber, isValidPhoneNumber } from 'react-phone-number-input'
import Breadcrumbs from '@mui/material/Breadcrumbs';
const Navbar2 = () => {
	return (
		<nav className="navbar navbar-expand-lg  navbar-dark bg-primary" style={{ color: "#ffffff" }}>
			<div className="container-fluid" >
				<div className="collapse navbar-collapse" id="navbarSupportedContent" >
					<ul className="navbar-nav me-auto mb-2 mb-lg-0" >
						<li className="nav-item" >
							Add New Customer
						</li >
					</ul >
				</div >
			</div >
		</nav >
	)
}

const AddCustomer = () => {
	const dispatch = useDispatch()
	let history=useHistory();
	const [phone, setPhone] = useState('')
	const [customer, setCustomer] = useState({ title: "Mr", name: "" });
	const onChange = (e) => {
		setCustomer({ ...customer, [e.target.name]: e.target.value })

	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (customer.name.length < 1) {
			console.log(customer.name.length);
			notifyWarning("Customer name less than 1");
		}
		else if (phone === null || phone === undefined) {
			notifyWarning("Phone Number can not be empty");
		}
		else if (isPossiblePhoneNumber(phone) === false) {
			console.log(phone);
			notifyWarning("Enter correct phone Number");
		}
		else if (isValidPhoneNumber(phone) === false) {
			notifyWarning("Enter valid phone Number");
		}
		else {
			dispatch(addCustomer(history,customer.title, customer.name, phone));
		}
	}

	return (
		<>
			<br />
			<Breadcrumbs separator="›" sx={{ padding: 2 }} aria-label="breadcrumb">
				<Link underline="hover" color="inherit" to="/customers">
					Customers List
				</Link>
				<Link
					underline="hover"
					color="text.primary"
					to="#"
				>
					Add new customer
				</Link>
			</Breadcrumbs>
			<Navbar2 />
			<br />
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm col-lg-4 ">
						<label htmlFor="exampleFormControlSelect1">Enter Title</label>
						<select className="form-select" id="exampleFormControlSelect1"
							name="title" value={customer.title} onChange={onChange} >
							<option value="Mr">Mr</option>
							<option value="Mrs">Mrs</option>
						</select>
					</div>
					<div className="col-sm col-lg-4">
						<label htmlFor="name">Name</label>
						<input required type="text" className="form-control" id="name" name="name"
							value={customer.name} onChange={onChange} placeholder="Enter customer Name to add Entries" />
					</div>
					<div className="col-sm col-lg-4">
						<label htmlFor="phone">Enter Phone No.</label>
						<PhoneInput
							international
							defaultCountry="IN"
							placeholder="Enter Phone Number"
							className="form-control"
							id="phone" value={phone} onChange={setPhone} required />
						{/* <input required type="number" className="form-control" id="phone" name="phone" onChange={onChange} placeholder="Enter Phone Number" /> */}
					</div>

					{/* <div className="col-sm col-lg-4">
						<label htmlFor="amount">You Gave</label>
						<input
							required="required" min="0"
							type="number"
							className="form-control"
							id="amount"
							value={customer.lendamount}
							onChange={onChange}
							name="lendamount"
						/>
					</div>
					<div className="col-sm col-lg-4">
						<label htmlFor="amount">You Got</label>
						<input
							required="required" min="0"
							type="number"
							className="form-control"
							id="amount"
							value={customer.takeamount}
							onChange={onChange}
							name="takeamount" 
						/>
					</div> */}
				</div>
				<div className="row mt-3">
					<div className="col-sm">
						<button type="submit" className="btn btn-primary">
							Add Customer
						</button>
					</div>
				</div>
			</form>
		</>
	)
}

export default AddCustomer;





