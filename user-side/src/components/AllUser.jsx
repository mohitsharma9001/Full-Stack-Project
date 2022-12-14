import React from 'react'
import { Table, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers } from '../services/api'
// import { Link, useNavigate } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`;




export const AllUser = () => {
const [user,setUsers] = React.useState([])


  

React.useEffect(()=>{

     getAllUsers()
     

},[])

  
  
  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
}

const deleteUserData = async (_id) => {
  let filter =  user.filter((e)=>e._id != _id)
 setUsers(filter)
}
  
return (
    <div>
      <StyledTable>
          <TableRow>
           <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
          
          <TableBody>
         {
          user.map((data)=>{
           return <TableRow key={data.id}>
                     
                     <TableCell>{data.name}</TableCell>
                     <TableCell>{data.username}</TableCell>
                     <TableCell>{data.email}</TableCell>
                     <TableCell>{data.phone}</TableCell>
                     <TableCell>
                      <Button variant="contained" color='secondary'  onClick={() => deleteUserData(data._id)}>Delete</Button>
                     </TableCell>
            </TableRow>
          })
         }
          </TableBody>
      </StyledTable>
    </div>
  )
}

