import fluor from './fluor';
import pastelCandy from './pastelCandy';

const themes = {
	fluor,
	pastelCandy
};

export default function getTheme(theme) {
	return themes[theme];
}
