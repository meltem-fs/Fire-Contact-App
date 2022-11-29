import React from "react";

const Form = ({ handleSubmit, values, setValues }) => {


  const changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name, value);
    setValues({ ...values, [name]: value });
    console.log(values)
  };

  // console.log('value.name', value.name)
  // console.log('value.gender :>> ', value.gender);
  // console.log('value.phone', value.phone)
  return (
    <form style={{width:"20rem"}} className="container for" onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center border border-none w-100 ">
        <a className="m-2 mt-3 fs-5" href="https://github.com/ozkan4186">
          <code> {`<Anka/>`} </code>
        </a>
        <h2 className="m-2">DESİGN</h2>
      </div>

      <br />
      <br />
      <h2 className="border border-none w-100 text-center ">ADD CONTACT</h2>
      <br />
      <br />
      <div
        style={{
          backgroundColor: "aqua",
          alignİtems: "center",
          border: "none",
          borderRadius: "10px",
          height: "300px",
          padding: "2rem",
        }}
      >
        <div className=" mb-3 ">
          <input
            type="text"
            className="px-3 form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Name"
            value={values.name}
            name="name"
            onChange={changeHandler}
          />
          <i className="fa-solid fa-person phone1 "></i>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 ">
          <input
            type="tel"
            className="px-4 form-control"
            id="phone"
            placeholder="+90 555 555 5555"
            value={values.phone}
            name="phone"
            onChange={changeHandler}
          />
          <i className="fa-solid fa-phone  phone2 "></i>
        </div>
        <select
          className="form-select"
          aria-label="Default select example"
          value={values.gender}
          name="gender"
          onChange={changeHandler}
        >
          <option value="" disabled>
            Selected your gender
          </option>
          <option value="Gender">Other</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
        <br />

        <button type="submit" className="btn btn-primary">
          ADD
        </button>
      </div>
    </form>
  );
};

export default Form;
