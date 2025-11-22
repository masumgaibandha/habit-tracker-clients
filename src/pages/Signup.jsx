import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';

const Signup = () => {
  
  const handleSignUp = (e) =>{
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log('New user signed up', {name, email, photo, password})

    createUserWithEmailAndPassword(auth, email, password).then((res) =>{
      toast.success('Sign up Successfully')
    })
    .catch(e=>{
      toast.error("User Already registered")
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-2xl font-bold text-center pt-3">Sign Up</h1>
      <div className="card-body">
        
          <form onSubmit={handleSignUp}>
            <fieldset className='fieldset'>
              <label className='label'>Name</label>
            <input type="text" name="name" id="" placeholder='Your Name' className='input'/>

            <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />

          <label className='label'>Photo URL</label>
          <input type="url" name="photo" id="" placeholder='Input photo URL' className='input'/>

          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          
          <button type='submit' className="my-btn mt-4">Sign Up</button>
            </fieldset>
          </form>
          <p className='text-center'>OR</p>
          <button className='btn bg-base-100'>
            <FcGoogle size={20}/>
          Sign in with Google
          </button>
          <p className='text-center pt-2'>Already have an account? Please {" "}
          <Link to={'/signin'} className='text-primary hover:text-blue-800 font-semibold'>
          Sign in
          </Link> {" "}

          </p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Signup