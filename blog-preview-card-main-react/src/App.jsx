import './App.css'
import avatar  from './assets/images/image-avatar.webp'
import imgCard from './assets/images/illustration-article.svg'

function App() {

  return (
    <>
      <div className=' w-full h-screen bg-amber-400 flex justify-center items-center'>   
        <div className=' border-2   gap-4 border-black shadow-[5px_5px_black]  bg-white w-72 md:w-80 min-h-[52vh] flex  justify-start items-center flex-col rounded-xl  '>
          <img className='w-[90%]  m-5 rounded-xl' src={imgCard} alt="" />
          <div className='w-full flex  flex-col pl-4 gap-2 font-bold'>
            <div className='bg-amber-400 rounded-md  w-24 h-8 flex justify-center items-center' >Learning</div>
            <p className='text-sm'>Published 21 Dec 2023</p>
             <h1 className='text-xl'>HTML & CSS foundations</h1>
          </div>
           
           
            <p className='pl-4 text-sm'> These languages are the backbone of every website, defining structure, content, and presentation.</p>
            <div className='w-full p-4 font-bold flex items-center gap-3'> 
              <img className='w-10 h-10' src={avatar} alt="" />
               <p>Greg Hooper</p>
            </div>
        </div>
      </div>
    </> 
  )
}

export default App