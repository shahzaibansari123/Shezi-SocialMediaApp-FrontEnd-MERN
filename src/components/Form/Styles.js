import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#000000',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#0A1332',
    color: 'white',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    
  },
  formInputs:{
    backgroundColor: 'white'
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));