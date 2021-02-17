import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh'
	},
	main: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(2)
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
		<div id='app' className={(classes.root, 'App')}>
			<Container component='main' className={classes.main} maxWidth='sm'>
				<AppBar />
				<img src={logo} className='App-logo' alt='logo' />
				<Typography variant='h2' component='h1' gutterBottom>
					Toggle Theme
				</Typography>
				<Typography variant='h5' component='h2' gutterBottom>
					{'Toggle the theme by clicking on the spiral'}
				</Typography>
				<Typography variant='body1'>More info temp</Typography>
			</Container>
			<footer className={classes.footer}>
				<Container maxWidth='sm'>
					<Typography variant='body1'>Another sentence temp</Typography>
				</Container>
			</footer>
		</div>
	);
}
