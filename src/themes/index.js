import fluor from './fluor';
import pastelCandy from './pastelCandy';
import normal from './normal';

const themes = {
	normal,
	fluor,
	pastelCandy
};

export default function getTheme(theme) {
	return themes[theme];
}
