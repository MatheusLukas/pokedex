export function Pokedex() {
  return (
    <div className="flex gap-1 ">
      <div className="bg-[#f63c5b] w-[400px] h-[600px] border-[6px] rounded-[20px] border-zinc-900 flex justify-start flex-col items-center ">
        <div className=" w-[300px] h-[170px] mt-[40px] border-[20px] flex items-center rounded-[20px] border-zinc-900">
          <img className="rounded-[2px] object-contain" src="/scene.jpg"></img>
        </div>
        <input
          type="search"
          className="mt-[20px] w-[300px] h-[25px] rounded-[5px]  border-[2px] border-zinc-900  "
          placeholder="Name or Number"
        ></input>
        <div className="bg-white w-[300px] h-[220px] mt-[25px] rounded-[10px] border-[2px] border-zinc-900 "></div>
        <div className="flex gap-3 mt-[20px] ">
          <button className=" w-[100px] h-[40px] border-[5px] rounded-[10px] border-black bg-zinc-900 text-white ">
            Previous
          </button>
          <button className="w-[100px] h-[40px] border-[5px] rounded-[10px] border-black bg-zinc-900 text-white">
            Next
          </button>
        </div>
      </div>

      <div className="bg-[#f63c5b] w-[300px] h-[500px] border-[6px] rounded-[20px] border-zinc-900 self-end"></div>
    </div>
  );
}