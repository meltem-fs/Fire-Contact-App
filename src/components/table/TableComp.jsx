import React from 'react'
import { Table } from 'react-bootstrap';
import { GetUser, DeleteUser } from "../../utils/functions";

const TableComp = ({ handleUserEdit }) => {
  const { contactList } = GetUser();
  return (
    <div className=" mx-auto">
      <h3 className="text-center">CONTACTS</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contactList?.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.name}</td>
                <td>{element.phone}</td>
                <td>{element.gender}</td>

                <td>
                  <button
                    onClick={() => {
                      handleUserEdit(
                        element?.id,
                        element?.username,
                        element?.phone,
                        element?.gender
                      );
                    }}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button onClick={() => DeleteUser(element.id)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComp