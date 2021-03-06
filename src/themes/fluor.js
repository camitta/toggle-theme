import { createMuiTheme } from '@material-ui/core/styles';

// fluor theme
const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#badef2',
			contrastText: '#616a70'
		},
		background: {
			default: '#000000'
		},
		text: {
			primary: '#badef2'
		}
	}
});

export default theme;
