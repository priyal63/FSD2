import { useState } from "react";

function Form1() {
  const [formdata, setformdata] = useState({});
  function handleChange(e) {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !formdata.un ||
      !formdata.eid ||
      !formdata.pass ||
      !formdata.cpass ||
      !formdata.con
    ) {
      alert(`Pleaase fill required fields.`);
    } else if (formdata.pass.length <= 8) {
      alert(`Password Length Must be > 8`);
    } else if (formdata.pass !== formdata.cpass) {
      alert(`Password Must be same.`);
    } else if (formdata.con.length != 10) {
      alert(`Contact Number Length Must be  10.`);
    } else {
      alert(`Thank you ! Welcome ${formdata.un}`);
    }
  }

  return (
    <>
      <h1>-------------------- Form -----------------------</h1>
      <form onSubmit={handleSubmit}>
        <label>Username </label>
        <input
          type="text"
          name="un"
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <br></br>
        <label>Email </label>
        <input
          type="email"
          name="eid"
          onChange={handleChange}
          placeholder="Enter Email"
        />
        <br></br>
        <label>Password </label>
        <input
          type="password"
          name="pass"
          onChange={handleChange}
          placeholder="Enter Password"
        />
        <br></br>
        <label>Conform Password </label>
        <input
          type="password"
          name="cpass"
          onChange={handleChange}
          placeholder="Enter Conform Password"
        />
        <br></br>
        <label>Contect</label>
        <input type="number" name="con" onChange={handleChange} />
        <br></br>
        <label>Comment </label>
        <textarea name="msg" onChange={handleChange} placeholder="Enter Name" />
        <br></br>
        <label>Gender</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        Female
        <br></br>
        <label>Hobby</label>
        <input
          type="checkbox"
          name="hobby"
          value="cricket"
          onChange={handleChange}
        />
        Cricket
        <input
          type="checkbox"
          name="hobby"
          value="hockey"
          onChange={handleChange}
        />
        Hockey
        <input
          type="checkbox"
          name="hobby"
          value="Carrom"
          onChange={handleChange}
        />
        Carrom
        <br></br>
        <select name="city" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Ahe">Ahmedabad</option>
          <option value="Sur">Surat</option>
        </select>
        <input type="submit"></input>
      </form>
    </>
  );
}
export default Form1;
