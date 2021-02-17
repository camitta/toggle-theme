import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
export const StyledButton = withStyles(theme => ({
  root: {
    borderRadius: 1,
    height: 40,
    padding: '1em',
    margin: '10px',
    color: theme.palette.primary.main,
    boxShadow: '0px 3px',
    '&:hover': {
      background: 'linear-gradient(45deg, #9954c8 0%, #fcb045 100%)',
      color: '#fff'
    }
  },
  outlined: {
    borderColor: theme.palette.primary.main
  }
}))(Button)
