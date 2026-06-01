import Task from "./Task";
import Parent from "./Parent";
import Myapp from "./Myapp.jsx";
import Productlist from "./Productlist.jsx";
import Events from "./Events.jsx";
import Form from "./Form.jsx";
import My from "./routing/My.jsx";
import Student from "./routing/Student.jsx"

function Mainapp(){
    return(
        <>
            <Myapp/>
            <Task/>
            <Parent/>
            <Productlist/>
            <Events/>
            <Form/>
            <My/>
        </>
    )
}
export default Mainapp;