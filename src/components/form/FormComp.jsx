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
    <form
      style={{ width: "20rem" }}
      className="container for"
      onSubmit={handleSubmit}
    >
      <div className="d-flex justify-content-center border border-none w-100  align-items-center shadow  bg-white rounded">
        <a className="m-2 mt-3 fs-5  " href="https://github.com/meltem-fs">
          <svg width="38" height="38" viewBox="0 0 2048 2048">
            <path
              fill="currentColor"
              d="M1600 576q0 40-15 75t-41 61t-61 41t-75 15h-116q13 23 27 45t27 46t20 49t8 52q0 39-15 74t-41 61t-61 42t-75 15q-48 0-89-22t-69-61v425q41-51 91-91t108-67t121-41t128-15h64v64q0 110-39 208t-108 176t-162 126t-203 63v131H896v-131q-109-13-202-62t-163-127t-108-175t-39-209v-64h64q65 0 128 14t120 42t108 67t92 91v-425q-27 39-68 61t-90 22q-40 0-75-15t-61-41t-41-62t-15-74q0-27 8-52t20-48t26-46t28-46H512q-40 0-75-15t-61-41t-41-61t-15-75q0-40 15-75t41-61t61-41t75-15h116q-13-22-27-45t-27-46t-20-49t-8-52q0-39 15-74t41-61t61-42t75-15q43 0 74 13t55 37t41 53t37 63l15 26l15-26q18-33 36-63t42-53t54-36t75-14q40 0 75 15t61 41t41 62t15 74q0 27-8 52t-20 48t-26 47t-28 45h116q40 0 75 15t61 41t41 61t15 75zm-419-448q-17 0-32 9t-23 23l-97 169q63 18 110 64l98-169q9-15 9-32q0-26-19-45t-46-19zM960 704q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50q0 27 10 50t27 40t41 28t50 10zM739 128q-27 0-46 19t-19 45q0 17 9 32l98 169q47-46 110-64l-97-169q-8-14-23-23t-32-9zm-27 512q-4-16-6-31t-2-33q0-17 2-32t6-32H512q-26 0-45 19t-19 45q0 26 19 45t45 19h200zm27 384q17 0 32-8t23-24l97-169q-63-18-110-64l-98 169q-9 15-9 32q0 26 19 45t46 19zm-222 389q11 72 44 135t82 112t113 83t135 44q-11-72-44-135t-82-112t-113-83t-135-44zm885 0q-72 11-135 44t-112 82t-82 113t-44 135q72-11 135-44t112-82t82-113t44-135zm-221-389q27 0 46-19t19-45q0-17-9-32l-98-169q-47 46-110 64l97 169q8 15 23 23t32 9zm227-384q26 0 45-19t19-45q0-26-19-45t-45-19h-200q4 16 6 31t2 33q0 17-2 32t-6 32h200z"
            />
          </svg>
        </a>
        <h2 className="m-2">DESİGN</h2>
      </div>

      <br />
      <br />
      <h2 className="border border-none w-100 text-center shadow p-3 bg-white rounded ">
        ADD CONTACT
      </h2>
      <br />
      <br />
      <div
        style={{
          backgroundColor: "lightblue",
          alignİtems: "center",
          border: "none",
          borderRadius: "10px",
          height: "330px",
          padding: "1.5rem",
          boxShadow: "2px 2px 10px black",
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
          <i
            style={{ top: "17.3rem", left: "2.5rem" }}
            className="fa-solid fa-person phone1"
          ></i>
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
          <i
            style={{ top: "23.5rem", left: "2.5rem" }}
            className="fa-solid fa-phone  phone2 "
          ></i>
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
