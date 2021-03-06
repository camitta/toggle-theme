import { createMuiTheme } from '@material-ui/core/styles';

//default 'normal' theme
const normal = createMuiTheme({
	palette: {
		primary: {
			main: '#000000',
			contrastText: '#ffffff'
		},

		background: {
			default: '#ffffff'
		},
		text: {
			primary: '#000000'
		}
	}
});

export default normal;
