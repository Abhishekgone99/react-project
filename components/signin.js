import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './signin.css'

const SignIn = () => {
    let [name, setname] = useState('')
    let [email, setemail] = useState('')
    let [password, setpassword] = useState('')
    let history = useHistory();

    let submitFn = (e) => {
        e.preventDefault();
        let Data = { name, email, password }
        fetch(" http://localhost:4000/userDetails", {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(Data)
        })
        alert("Signed up successfully!!!")
        history.push('./')


    }

    return (
        <div className="sign">
            <marquee behaviour="scroll" direction="right" scrollamount="20"> <h1>Sign up to get exiting offers!!!!!!!</h1></marquee>
            <form onSubmit={submitFn}>
                <div>
                    <label htmlFor="name">Name</label> <br />
                    <input type="text" id="name" name="name" required value={name} onChange={(e) => setname(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label> <br />
                    <input type="email" id="email" name="email" required value={email} onChange={(e) => setemail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" id="password" name="password" required value={password} onChange={(e) => setpassword(e.target.value)} />
                </div>
                <button>Sign Up</button>
            </form>

        </div>
    );
}

export default SignIn;
