export default function Signup({setShowLogin}) {
    return (
        <>
            <h3 className="text-center">Sign Up</h3>
            <form className="border w-50 mx-auto p-5 mt-4">
                <label className="mb-2">First Name *</label>
                <input type="text" className="form-control rounded-0" />

                <label className="mt-3 mb-2">Email</label>
                <input type="text" className="form-control rounded-0" />

                <label className="mt-3 mb-2">Mobile Number *</label>
                <input type="text" className="form-control rounded-0" />

                <button className="d-block btn btn-dark mt-3 rounded-0 w-100" type="submit">Sign up</button>
                <button onClick={()=>setShowLogin(true)} className="mt-3 text-center border-0 bg-white w-100 "><a href="#" className="text-decoration-none">Back to Login</a></button>
            </form>
        </>
    )
}