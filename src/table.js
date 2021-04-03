

import {  makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import DataTable from './table-data';
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


const Table= () => {
  const classes= useStyles();
  return ( 
    <div >
      <Template />
      <main className={classes.content}>
          <Toolbar/>
          <DataTable/>

      </main>
    </div>
   );
}
 
export default Table;