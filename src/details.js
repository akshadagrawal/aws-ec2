import {  makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import DetailsTable from './details-data';
import Template from './template';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: 200
  }
}));


const Details= () => {
  const classes= useStyles();
  return ( 
    <div >
      <Template />
      <main className={classes.content}>
          <Toolbar/>
          <DetailsTable/>
          <DetailsTable/>
          <DetailsTable/>



      </main>
    </div>
   );
}
 
export default Details;