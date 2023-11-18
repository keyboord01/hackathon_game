export default function Navbar() {
  return (
    <div className=" w-full h-14 text-black flex flex-row items-center justify-between p-4">
      <div className="flex flex-row gap-2 ">
        <button className="border-2 border-black px-4 py-2 rounded-sm hover:-translate-x-[2px] hover:translate-y-[2px] cursor-pointer">
          BUTTON
        </button>
        <button className="border-2 border-black px-4 py-2 rounded-sm hover:-translate-x-[2px] hover:translate-y-[2px] cursor-pointer">
          BUTTON
        </button>
      </div>
      <div>
        <div className="flex flex-row gap-2">
          <button className="border-2 border-black px-4 py-2 rounded-sm hover:-translate-x-[2px] hover:translate-y-[2px] cursor-pointer">
            BUTTON
          </button>
          <button className="border-2 border-black px-4 py-2 rounded-sm hover:-translate-x-[2px] hover:translate-y-[2px] cursor-pointer">
            BUTTON
          </button>{" "}
          <button className="border-2 border-black px-4 py-2 rounded-sm hover:-translate-x-[2px] hover:translate-y-[2px] cursor-pointer">
            BUTTON
          </button>
          <button className="border-2 border-black px-4 py-2 rounded-sm hover:-translate-x-[2px] hover:translate-y-[2px] cursor-pointer">
            BUTTON
          </button>
        </div>
      </div>
    </div>
  );
}
