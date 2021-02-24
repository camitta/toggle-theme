import React, { useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import './App.css';
import AppBar from './components/AppBar';
import ToggleTheme from './components/ToggleTheme';

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
	},
	header: {
		paddingBottom: '2px'
	}
}));

export default function App() {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Container className={classes.main} maxWidth='xl'>
				<div>
					<AppBar />
				</div>
				<Container>
					<Typography variant='h2' component='h1' gutterBottom>
						Toggle Theme
					</Typography>
					<Typography variant='h5' component='h2' gutterBottom>
						{'Click the toggle buttons down below to switch between themes.'}
					</Typography>
				</Container>
			</Container>
			<footer className={classes.footer}>
				<Container>
					<ToggleTheme />
				</Container>
			</footer>
		</Container>
	);
}
