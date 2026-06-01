function Form() {
  const handlechange = (e) => {
    document.getElementById("a").innerHTML = e.target.value;
    console.log(e.target.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    var u = document.getElementById("n").value;
    alert(`Hello ${u}`);
  };
  const handledoubleclick = () => {
    document.getElementById("b").innerHTML = "You Clicked Twice";
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <input type="text" id="n" onChange={handlechange}></input>
        <br></br>
        <input type="submit"></input>
        <br></br>
      </form>
      <h2 id="a"></h2>
      <button
        style={{ color: "green", backgroundColor: "yellow" }}
        onDoubleClick={handledoubleclick}
      >
        Click Here
      </button>
      <h2 id="b"></h2>
    </>
  );
}
export default Form;
