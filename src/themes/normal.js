import { createMuiTheme } from '@material-ui/core/styles';

//default 'normal' theme
const normal = createMuiTheme({
	palette: {
		primary: {
			main: '#000000',
			light: '#c4c4c4',
			dark: ''
		},
		secondary: {
			main: '#e5e5e5'
		},
		error: {
			main: '#C10230',
			dark: '#C10230',
			contrastText: '#ffffff'
		},
		text: {
			primary: '#000000',
			secondary: '#000000',
			disabled: '#A69B95',
			hint: '#FABA91'
		},
		background: {
			paper: '#ffffff',
			default: '#e5e5e5'
		}
	}
});

export default normal;
