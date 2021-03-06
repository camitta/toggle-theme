import { createMuiTheme } from '@material-ui/core/styles';

// fluor theme
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#dc0073',
			contrastText: '#390099'
		},
		background: {
			default: '#89fc00'
		},
		text: {
			primary: '#390099'
		}
	}
});

export default theme;
