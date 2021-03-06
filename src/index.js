import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomThemeProvider from './components/CustomThemeProvider';
ReactDOM.render(
	<CustomThemeProvider>
		<CssBaseline />
		<App />
	</CustomThemeProvider>,
	document.getElementById('root')
);
