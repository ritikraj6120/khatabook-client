import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField, Divider, Paper } from '@mui/material';
import { notifyWarning } from '../alert';
const User = () => {
	let history = useHistory();
	const { UserDetail, getUser, changePassword } = useContext(UserContext);
	useEffect(() => {
		if (localStorage.getItem('token'))
			getUser()
		else {
			localStorage.clear();
			history.push('/login');
		}
		// eslint-disable-next-line
	}, [])

	const [passwords, setPasswords] = useState({ currentPassword: "", newPassword: "" })
	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// eslint-disable-next-line no-console
		const user = {
			currentPassword: data.get('currentPassword'),
			newPassword: data.get('newPassword'),
		};
		if (user.currentPassword === user.newPassword) {
			notifyWarning("New Password is same as Old Password");
			return;
		}
		const status = await changePassword(user);
		if (status === 200) {
			setPasswords({ currentPassword: "", newPassword: "" })
		}

	};
	return (
		<>
			<Box sx={{ minWidth: 275 }}>
				<Card variant="outlined">
					<CardContent>
						<Typography color="text.secondary">
							Name
						</Typography>
						<Typography variant="h5" component="div">
							{UserDetail.fname + " " + UserDetail.lname}
						</Typography>
						<Typography color="text.secondary">
							Email
						</Typography>
						<Typography variant="body2">
							{UserDetail.email}
						</Typography>
						<Typography color="text.secondary">
							Created account on
						</Typography>
						<Typography variant="body2">
							{new Date(UserDetail.date).toLocaleString()} I.S.T
						</Typography>
					</CardContent>
				</Card>
			</Box>
			<div className="container">
				<Paper elevation={3} sx={{
					width: "35vw", borderRadius: "10px"
				}}>
					<Box component="form" onSubmit={handleSubmit}
						sx={{
							marginTop: 8,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							width: "35vw"
						}} autoComplete="off" >
						<Typography variant="h5" component="div" sx={{ marginTop: 1 }}>
							Change Password
						</Typography>
						<TextField
							required
							label="Current Password"
							id="Current Password"
							variant="outlined"
							name="currentPassword"
							type="text"
							inputProps={{ minLength: 8 }}
							sx={{ width: "25vw", marginTop: 3 }}
							value={passwords.currentPassword}
							onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })}
						/>
						<Divider />
						<TextField
							required
							label="New Password"
							id="New Password"
							variant="outlined"
							name="newPassword"
							type="text"
							margin="dense"
							inputProps={{ minLength: 8 }}
							sx={{ width: "25vw" }}
							value={passwords.newPassword}
							onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
						/>

						<Button
							type="submit"
							variant="contained"
							sx={{ mt: 3, mb: 1 }}
							endIcon={<SendIcon />}
						>
							Update
						</Button>

					</Box>
				</Paper>
			</div>
		</>
	)
}
export default User;

