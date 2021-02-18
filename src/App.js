import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import { StyledButton } from './components/StyledButton';
import Link from '@material-ui/core/Link';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary'>
			{'Copyright © '}
			<Link color='inherit' href='https://material-ui.com/'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		padding: theme.spacing(0, 0),
		margin: { margin: '0px' },
		justifyContent: 'space-between'
	},
	main: {
		marginTop: theme.spacing(0),
		marginBottom: theme.spacing(2),
		padding: '0px',
		justifyContent: 'space-between'
	},
	footer: {
		padding: theme.spacing(3, 2),
		marginTop: 'auto',
		backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]
	}
}));

export default function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container className={classes.main} maxWidth='xl'>
				<div>
					<AppBar />
				</div>
				<div>
					<Typography variant='h2' component='h1' gutterBottom>
						Sticky footer
					</Typography>
					<Typography variant='h5' component='h2' gutterBottom>
						{'Pin a footer to the bottom of the viewport.'}
						{'The footer will move as the main element of the page grows.'}
					</Typography>
					<Typography variant='body1'>Sticky footer placeholder.</Typography>
				</div>
			</Container>

			<footer className={classes.footer}>
				<Container maxWidth='sm'>
					<Typography variant='body1'>My sticky footer can be found here.</Typography>
					<Copyright />
				</Container>
			</footer>
		</div>
	);
}
