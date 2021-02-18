import { createMuiTheme } from '@material-ui/core/styles';

// 'pastel candy' theme
const pastelCandy = createMuiTheme({
	palette: {
		primary: {
			main: '#bdb2ff'
		},
		secondary: {
			main: '#FEF6D3'
		},
		error: {
			main: '#C10230',
			dark: '#C10230',
			contrastText: '#ffffff'
		},
		background: {
			paper: '#9bf6ff',
			default: '#caffbf'
		},
		text: {
			primary: '#25439a',
			secondary: '#25439a'
		}
	}
});

export default pastelCandy;
