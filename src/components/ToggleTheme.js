import React, { useContext } from 'react';
import { ToggleButtonGroup } from '@material-ui/lab';
import { ToggleButton } from '@material-ui/lab';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';
import { CustomThemeContext } from './CustomThemeProvider';

// const { currentTheme, setTheme } = useContext(CustomThemeContext);

// const handleThemeChange = (event, newTheme) => {
// 	setTheme(newTheme);
// };

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
		<ToggleButtonGroup
			className={classes.root}
			value={currentTheme}
			exclusive
			size='small'
			onChange={handleThemeChange}>
			<ToggleButton value='pastelCandy'>
				<CheckIcon />
			</ToggleButton>
			<ToggleButton value='fluor'>
				<CheckIcon />
			</ToggleButton>
		</ToggleButtonGroup>
	);
}
