import React, { useState } from 'react'
import { useGlobalState } from '../../Context/Context'
import { json, useNavigate } from 'react-router-dom';

function AppLogoin() {
    const {} = useGlobalState()
    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState("");

    const naviagte = useNavigate()
    let handleLogin = () => {
        try {
            // console.log("userName -->", userName , "password -->", password )
            fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: userName,
    password: password,
    expiresInMins: 30, // optional, defaults to 60
  })
})
.then(res => res.json())
.then( res => {
    if(res){
        localStorage.setItem("token" , JSON.stringify(res.token))
        naviagte('/home')
        setUserName("")
        setPassword("")
    }

});
// token

       
        } catch (error) {
            
        }
        
    }

  return (
    <div>
        <div className="container">
            <div className="row mt-5">
                <h2 className='mt-5'>Login</h2>
                <div className="mt-3">
                    <input type="text" placeholder='Username' className='form-control' value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="mt-3">
                    <input type="password" placeholder='Password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mt-3">
                    <button className='btn btn-dark' onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppLogoin





// import React, { useState } from 'react';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('your_login_api_url', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await response.json();
//       localStorage.setItem('token', data.token);
//       // Navigate to dashboard or perform any action upon successful login
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default Login;
