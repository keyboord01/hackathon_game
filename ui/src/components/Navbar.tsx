export default function Navbar() {
  return (
    <div className=" w-full h-14 text-black flex flex-row items-center justify-between p-4 pt-12">
      <div className="p-4 z-10">
        <img src="/assets/ZKGames.png" alt="test" width={244} />
      </div>
      <div>
        <div className="flex flex-row gap-2">
          <button
            onClick={() => (window.location.href = "/")}
            className="border-2 border-black px-4 py-2 rounded-sm hover:-translate-x-[2px] hover:translate-y-[2px] cursor-pointer"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
