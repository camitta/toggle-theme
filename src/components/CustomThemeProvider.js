import React, { createContext, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from '../themes';

export const CustomThemeContext = createContext({
	currentTheme: 'normal',
	setTheme: null
});

const CustomThemeProvider = props => {
	const { children } = props;

	// Get current theme from localStorage
	const currentTheme = localStorage.getItem('appTheme') || 'normal';

	// State to hold selected theme
	const [ themeName, _setThemeName ] = useState(currentTheme);

	// Retrieve theme object by theme name
	const theme = getTheme(themeName);

	// Wrap _setThemeName to store new theme names in localStorage
	const setThemeName = name => {
		localStorage.setItem('appTheme', name);
		_setThemeName(name);
	};

	const contextValue = {
		currentTheme: themeName,
		setTheme: setThemeName
	};

	return (
		<CustomThemeContext.Provider value={contextValue}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</CustomThemeContext.Provider>
	);
};

export default CustomThemeProvider;
