import { createMuiTheme } from '@material-ui/core/styles';

// 'pastel candy' theme
const pastelCandy = createMuiTheme({
	palette: {
		primary: {
			main: '#bdb2ff',
			contrastText: '#caffbf'
		},
		background: {
			default: '#caffbf'
		},
		text: {
			primary: '#25439a'
		}
	}
});

export default pastelCandy;
