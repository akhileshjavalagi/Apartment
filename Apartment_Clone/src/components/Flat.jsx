import React from "react";
import { useState, useEffect } from "react";
import { ChakraProvider,TableContainer,Table, TableCaption,Thead , Tr, Th, Tfoot, Tbody, Td} from '@chakra-ui/react'
import axios from "axios";
export const Flat = () =>{
   
    const [data, setData] = useState([])
    useEffect(()=>{
        getData()
    },[])
   const getData = async (data) =>{
       var res = await axios.get("http://localhost:3001/apartments")
       setData([...res.data])
       
   }
   
   console.log(data)

    return (
        <TableContainer>
        <Table variant='simple'>
         
          <Thead>
            <Tr>
              <Th>Type</Th>
              <Th>Block</Th>
              <Th>Number</Th>
              <Th>Residents</Th>
            </Tr>
          </Thead>

          <Tbody>
             
              {
                   
              data.map(ele=>{
                 return (
                <Tr key={ele.id}>
                  <Td>{ele.Type}</Td>
                    <Td>{ele.Block}</Td>
                  <Td >{ele.Number}</Td>
                  <Td >{ele.Residents}</Td>
                </Tr>
                 )
                  
              }
    )
            }
        </Tbody>
        
        </Table>
      </TableContainer>
    )
}
    
