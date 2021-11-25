import React, { useState, useEffect } from 'react';
//simport React from './ivoiceTable.css'
import MaterialTable from 'material-table'

const empList = [
  {id: 1, Status :'Paid', client:'Aakash Singh', due_date :'01-10-2021',amount : 5000, paid : 3000, amount_due : 2000},
  {id: 2, Status :'Paid', client:'Vivek Singh', due_date :'01-10-2021',amount : 5000, paid : 3000, amount_due : 2000},
  {id: 3, Status :'Paid', client:'Sagar Singh', due_date :'01-10-2021',amount : 5000, paid : 3000, amount_due : 2000},
  
] 

function App() {

  const [data, setData] = useState(empList)
  const columns = [
    { title: "Invoice number", field: "id" },
    { title: "Status", field: "Status", },
    { title: "Client", field: "client", }, 
    { title: "Due Date", field: 'due_date' },
    { title: "Amount", field: "amount" },
    { title: "Paid", field: "paid" },
    { title: "Amount Due", field: "amount_due"}
    
  ] 
 

  return (
    <div className="App" style={{flex:6}}>
      
      <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default App; //exporting a component make it reusable and this is the beauty of react