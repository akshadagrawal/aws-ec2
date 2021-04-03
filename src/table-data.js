import * as React from 'react';
import  {DataGrid } from '@material-ui/data-grid';

const columns = [
  
  {field:'id', headerName: 'id', width:70},
  {
    field: 'instanceId',
    headerName: 'Instance Id',
    width: 170,
    renderCell: (params) => (
      
       <a href='/details'> {params.value} </a>
    
    ),
  },
  { field: 'name', headerName: 'Name', width: 170 , },
  { field: 'instanceState', headerName: 'Instance State', width: 170 },
  { field: 'instanceType', headerName: 'Instance Type', width: 170 },
  { field: 'statusCheck', headerName: 'Status Check', width: 170 },
  { field: 'alarmStatus', headerName: 'Alarm Status', width: 170 },
  { field: 'availabiltyZone', headerName: 'Availability Zone', width: 170 },
  { field: 'availabiltyZone', headerName: 'Availability Zone', width: 170 },
  { field: 'publicIPV4', headerName: 'Public IPV4', width: 170 },
  { field: 'elasticIP', headerName: 'Elastic IP', width: 170 },
  { field: 'monitoring', headerName: 'Monitoring', width: 170 },
  { field: 'secGroupName', headerName: 'Security group name' , width: 170 },
  { field: 'keyName', headerName: 'Key Name', width: 170 },
  { field: 'launchTime', headerName: 'Launch TIme', width: 270 },


  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  // },
];

const rows = [
  {
    id: 1,instanceId: "i-0b77d529e27d55ec0",
    instanceState: 'Stopped', 
    statusCheck:'-',
    instanceType:'t2.micro',
    alarmStatus: 'No alarms',
    availabiltyZone: 'us-east-2b',
    publicIPV4: '-',
    monitoring: 'Disabled',
    launchTime: '2021/02/07 13:44 GMT+5:30',
    keyName: 'testApi'

   }
  
];

export default function DataTable() {
  return (
    <div style={{  height:300 ,width: '100%' }}>
      <DataGrid rows={rows} columns={columns}  checkboxSelection hideFooter/>
    </div>
  );
}
