const Card = ({data}) => {
  console.log("From card", data);
  const {original_title,overview,release_date,vote_average} = data;
  return (
    <div className="w-80 flex flex-col">
      <div>
            <img src = "assets\Blank-Movie-Poster.webp" 
             alt='poster'
             className='h-80 rounded-xl'/>
          <h1 className="font-bold text-2xl my-3">{data && data.title}</h1>
        </div>
        <div>
          <p className='flex flex-grow'>{overview}</p>
        </div>
        <div className="flex my-3 justify">
        <p>{release_date}</p>
        <p>{vote_average}</p>
        </div>
    </div>
  )
}

export default Card