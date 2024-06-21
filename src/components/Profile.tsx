import {useState} from 'react';

type ProfileProps = {
  url: string;
  name: string;
}

export default function Profile(props: ProfileProps){
  const [showPlay, setShowPlay] = useState(false);

  const handleMouseEnter = () => {
    setShowPlay(true);
  }

  const handleMouseLeave = () => {
    setShowPlay(false);
  }

  return <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="rounded-md px-4 py-4 hover:bg-zinc-900 cursor-pointer">
    <div className="relative">
      <figure>
        <img className="rounded-full w-[120px] h-[120px]" src={props.url} alt="" />
      </figure>
      {
        showPlay ? <div className="absolute bottom-0 right-[10px]">
        <button className="bg-green-500 w-[40px] h-[40px] rounded-full flex items-center justify-center">
          <svg className="w-[20px] h-[20px]" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" /></svg>
        </button> 
      </div> : null
      }
    </div>
    <p className="text-sm text-white">{props.name}</p>
    <p className="text-sm text-gray-400">Artista</p>
  </div>
}