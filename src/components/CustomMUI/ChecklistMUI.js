import { makeStyles } from '@material-ui/core/styles';

export const ChecklistClasses = makeStyles(() => ({
	checklist: {
		display: 'inline-flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		marginLeft: '3rem',
		marginRight: '2rem',
		padding: '.5rem',
		width: '25vmax',
		maxWidth: '100%',
		boxShadow: '2px 2px 4px 2px #9c9c9c'
	},
	formItem: {
		paddingLeft: '10px'
	},
	title: {
		padding: '10px'
	},
	add: {
		display: 'flex',
		marginRight: '10%',
		width: '80%'
	}
}));
