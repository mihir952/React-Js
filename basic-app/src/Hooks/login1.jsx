function Login({setUsername}){
  return(
    <div>
        <input onChange={(event)=>{
            setUsername(event.target.value)
        }}></input>
    </div>
  )
}
export default Login;