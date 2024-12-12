import Image from "next/image";

export default function Home() {

 

  return (
    <div className="w-full p-8 h-[100%] flex flex-col justify-center items-center bg-orange-100">
      <main className="flex flex-col gap-8 py-10 px-6 items-center  justify-start  bg-white rounded-3xl   w-[50%] ">
        <Image
          className=" w-[50vw] rounded-2xl"
          src="/image-omelette.jpeg"
          alt="omelette"
          width={580}
          height={538}
          priority
        />

        <section className=" gap-6 w-full  flex justify-center items-start   flex-col  text-zinc-800  ">
          <h1 className=" text-5xl font-bold"> Simple Omelette Recipe</h1>
          <div className=" "> An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</div>
        </section>
        
        <div className=" w-[95%] flex py-8   gap-4  bg-pink-50 rounded-xl   flex-col items-start">
            <h2 className=" w-full mx-4 font-bold text-rose-900 text-lg">Preparation time</h2>
            <div className="mx-8">
              <ul className=" list-disc flex flex-col  gap-2">
                <li><strong>Total: </strong> Approximately 10 minutes</li>
                <li><strong>Preparation: </strong> 5 minutes</li>
                <li><strong>Cooking:</strong> 5 minutes</li>  
              </ul> 
            </div>
        </div>
        <div className=" w-full flex py-8   gap-4   rounded-xl   flex-col items-start">
            <h2 className=" w-full mx-4 font-bold text-rose-900 text-4xl">  Ingredients  </h2>
            <div className="mx-8">
              <ul className=" list-disc flex flex-col gap-2">
                <li> 2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li>Pepper, to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs </li>          
              </ul> 
            </div>
        </div>
        <div className="w-[90%] h-[1px] bg-slate-500 "></div>

        <div className=" w-full flex py-8   gap-4   rounded-xl   flex-col items-start">
            <h2 className=" w-full mx-4 font-bold text-rose-900 text-4xl"> Instructions  </h2>
            <div className="mx-8">
              <ul className=" list-decimal  flex flex-col  gap-4">
              <li className="pl-4 text-rose-900 font-extrabold " >
                 <span  className=" text-black font-normal pr-4" ><strong>Beat the eggs:</strong>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture,
                 </span>
               </li>
              <li className="pl-4 text-rose-900 font-extrabold " >
              <span  className=" text-black font-normal pr-4" ><strong>    Heat the pan: </strong> Place a non-stick frying pan over medium heat and add butter or oil.
                 </span>
               </li>
              <li className="pl-4 text-rose-900 font-extrabold " >
                 <span  className=" text-black font-normal pr-4"><strong>    Cook the omelette: </strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure  the eggs evenly coat the surface.
                 </span>
               </li>
              <li className="pl-4 text-rose-900 font-extrabold " >
                 <span  className=" text-black font-normal pr-4"><strong>    Add fillings (optional): </strong> When the eggs begin to set at the edges but are still slightly runny in the   middle, sprinkle your chosen fillings over one half of the omelette.
                 </span>
               </li>
              <li className="pl-4 text-rose-900 font-extrabold " >  
                 <span  className=" text-black font-normal pr-4"><strong>   Fold and serve: </strong> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate,
                 </span>
               </li>
              <li className="pl-4 text-rose-900 font-extrabold " >  
                 <span  className=" text-black font-normal pr-4"><strong>    Enjoy: </strong> Serve hot, with additional salt and pepper if needed.
                 </span>
               </li>
            
   
              </ul> 
            </div>
        </div>
        <div className="w-[90%] h-[1px] bg-slate-500 "></div>

        <div className=" w-full flex py-8   gap-4   rounded-xl   flex-col items-start">
            <h2 className=" w-full mx-4 font-bold text-rose-900 text-4xl"> Nutrition  </h2>
            <h3 className="mx-4"> The table below shows nutritional values per serving without the additional fillings.
            </h3>
            <div className="mx-8 w-full flex justify-center ">
             

              <table className=" w-full table-auto">
                <tbody>
                  <tr className="" >
                    <td className="p-2">calories</td>
                    <td className="p-2 font-bold text-rose-900">277Kcal</td>
                 </tr>
                 <tr className="">
                    <td className="p-2">carbs</td>
                    <td className="p-2 font-bold text-rose-900">0g</td>
                 </tr>
                 <tr>
                    <td className="p-2">protein</td>
                    <td className="p-2 font-bold text-rose-900">20g</td>
                 </tr>
                 <tr>
                    <td className="p-2">fat</td>
                    <td className="p-2 font-bold text-rose-900">22g</td>
                 </tr>
                </tbody>
                 
              </table>
            </div>
        </div>
      </main>
    </div>
  );
}
