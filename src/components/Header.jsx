const Header = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 '>
        <div className='col-span-1'>
            Logo
        </div>
        <div className="col-span-10 px-10">
        <div>
          <input
            className="bg-transparent outline-none px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            placeholder='Search'
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-800">
            🔍
          </button>
        </div>
        </div>
    </div>
  )
}

export default Header