import './App.css'
import usrImg from './assets/images/avatar-jessica.jpeg'

function App() {
   const links = [ 'GitHub','Frontend Mentor','LinkedIn','Twitter','Instagram']

  return (
    <>
      <div className=' flex  justify-center items-center w-full h-screen bg-[#141414]' >
        <div className=' rounded-lg w-[22rem]  min-h-[60vh] bg-[#1f1f1f] flex flex-col justify-around items-center ' >
          <div className=' text-white gap-1 w-full h-[40%] flex flex-col justify-start items-center ' > 
            <img className=' my-5 w-20 rounded-full' src={usrImg} alt="" />
            <h1 className=' text-2xl font-bold'>  Jessica Randall </h1>
            <p className='mb-4 text-sm  font-bold text-lime-400'>   London, United Kingdom </p>
            <p className=' text-sm'> &quot;Front-end developer and avid reader.&quot;   </p>
          </div>
          <div className='w-full flex items-center flex-col gap-3 m-2 text-white font-bold '>
           {links.map((link,idx)=>(
            <a href='/' key={idx} className='flex justify-center items-center rounded-lg bg-[#333] hover:bg-lime-400 hover:text-[#333] w-[85%] h-10 '>{link}</a>
           ))} 
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
