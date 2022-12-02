
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import FormComp from './components/form/FormComp';
import TableComp from './components/table/TableComp';
import { AddUser, EditUser } from "./utils/functions";
import { Toastify, ToastifyDark } from './utils/toast';

function App() {

  // const [name, setName] = useState("")
  // const [phone, setPhone] = useState("")
  // const [gender, setGender] = useState("")
  const initialValue = {
    name:"",
    phone:"",
    gender:"",
  }

  const [values, setValues] = useState(initialValue)

 const handleSubmit = (e) => {
   e.preventDefault();
   if (values.id) {
     EditUser(values);
     Toastify("Veri değiştirildi..");
   } else {
     AddUser(values);
     ToastifyDark("Veri eklendi..");
   }
   setValues(initialValue);
   console.log("form handle");
 };

 const handleUserEdit = (id, name, phone, gender) => {
   setValues({ id, name, phone, gender });
 };


  return (
    <div style={{height:"100vh"}} className=" w-100 flex-wrap d-flex justify-content-evenly align-items-center">
      <FormComp
        values={values}
        setValues={setValues}
        handleSubmit={handleSubmit}
      />
      <TableComp handleUserEdit={handleUserEdit} />
      <ToastContainer/>
    </div>
  );
}

export default App;
