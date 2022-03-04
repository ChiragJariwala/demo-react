import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'

const Biils = () => {

  const uri = process.env.REACT_APP_API_KEY
  const [bills, setBills] = useState([])
  const fetchBills = () => {
    axios.get(uri + '/Bill/GetAllBills',{
      withCredentials:true,
      crosssOrigin:true
    }).then(res => setBills(res.data))
    .catch(error=> window.alert(error))
  }


  useEffect(() => {
    fetchBills();
  }, [])


  return (
    <div>

      <Navbar />
      <div className="container mt-5">
        <p className="display-6">Bills</p>
        <table className="table table-striped table-responsive-sm">
          <thead>
            <tr>
              <td>Bill Id</td>
              <td>Job Number</td>
              <td>BillAmount</td>
              <td>CustomerName</td>
              <td>Phone</td>
              <td>Address</td>
              <td>BranchID</td>
              <td>UserID</td>
              <td>Area</td>
              <td></td>
            </tr>
          </thead>
        </table>
        {bills.map(x=>x.id)}

      </div>
    </div>
  )
}

export default Biils
