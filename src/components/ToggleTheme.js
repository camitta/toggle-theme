import React, { useContext } from 'react';
import ToggleButton from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';
import { CustomThemeContext } from './CustomThemeProvider';

const useStyles = makeStyles(theme => ({
	root: {
		root: {
			borderRadius: 1,
			height: 40,
			padding: '1em',
			margin: '10px',
			boxShadow: '0px 3px'
		}
	}
}));

export default function ThemeToggle() {
	const classes = useStyles();
	const { currentTheme, setTheme } = useContext(CustomThemeContext);
	const isNormal = Boolean(currentTheme === 'normal');

	const handleThemeChange = (event, newTheme) => {
		if (isNormal) {
			setTheme(newTheme);
		} else {
			setTheme('normal');
		}
	};
	return (
		<ToggleButton className={classes.root} value={currentTheme} exclusive size='small' onChange={handleThemeChange}>
			<CheckIcon />
		</ToggleButton>
	);
}
