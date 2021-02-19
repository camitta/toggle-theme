import { createMuiTheme } from '@material-ui/core/styles';

// fluor theme
const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#badef2',
			light: '#2d3e5e',
			dark: '#e3eff7',
			contrastText: '#e9edc9'
		},
		secondary: {
			main: '#292f33'
		},
		text: {
			primary: '#badef2',
			secondary: '#badef2'
		},
		background: {
			paper: '#292f33',
			default: '#616a70'
		}
	},
	contrastThreshold: 3,
	// Used by the functions below to shift a color's luminance by approximately
	// two indexes within its tonal palette.
	// E.g., shift from Red 500 to Red 300 or Red 700.
	tonalOffset: 0.2
});

export default theme;
