import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';


function SignUp(){

    let history=useHistory();
    const register = (()=>{
        history.push("/home");

    })

    return(
        <div className='container'>
            <h1>Sign Up here</h1>
            <input type="email" placeholder="Enter your email" /><br></br>
            <input type="password" placeholder="Enter your password" />

            <button style={{width: "150px", height: "30px", marginTop:"3%"}} onClick={register}>Register here</button>
        </div>
    )
}
export default SignUp