import { useAppContext } from "@/context";
import { useEffect, useState } from "react";

const List = ({ link , i } :{link :{} ,i:number}) => {
  const {setGlobalLinks , globalLinks} = useAppContext()
  const [platform ,setPlatform] = useState("github")
  const [address ,setAddress]  = useState("")
  // const handleAdd = () =>{
  //     setGlobalLinks([...globalLinks , {platform , address}])
  //     console.log(globalLinks)
  // }


  return (
    <div key={i} className="p-5 flex flex-col gap-3 bg-[--light-gray]">
      <div className="flex justify-between">
        <span>Link #{i + 1}</span>
        <span>Remove</span>
      </div>

      <div>
        <span>platform</span>
        <select value={platform} onChange={(e)=>{setPlatform(e.target.value)}} className="myInput px-4 py-3 rounded-lg border-[--disabled-black] cursor-pointer border outline-none w-full">
          <option value="github">GitHub</option>
          <option value="linkdin">linkdin</option>
          <option value="hello">hello</option>
        </select>
      </div>

      <div>
        link
        <input
          type="text"
          value={address}
          onChange={(e)=>{setAddress(e.target.value)}}
          placeholder="https://www."
          className="myInput px-4 py-3 rounded-lg border-[--disabled-black] cursor-pointer border outline-none w-full"
        />
      </div>
    </div>
  );
};

export default List;
