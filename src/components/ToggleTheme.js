import React, { useContext } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { CustomThemeContext } from './CustomThemeProvider';
import PaletteIcon from '@material-ui/icons/Palette';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles(theme => ({
	root: {
		height: 40,
		padding: '1em',
		margin: '10px'
	},
	button: {
		color: theme.palette.primary.contrastText,
		paddingTop: '1.25em',
		paddingBottom: '1.25em'
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
			<ToggleButton className={classes.button} value='pastelCandy'>
				<PaletteIcon />
			</ToggleButton>
			<ToggleButton className={classes.button} value='fluor'>
				<StarIcon />
			</ToggleButton>
		</ToggleButtonGroup>
	);
}
