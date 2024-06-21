type CardMusicGenderProps = {
  name: string
  color: string
  image: string
}

export default function CardMusicGender({
  color,
  name,
  image,
}: CardMusicGenderProps) {
  return (
    <div
      className="rounded-md p-5 min-h-40 relative overflow-hidden"
      style={{ background: color }}
    >
      <h2 className="text-white text-xl font-semibold w-3/5">{name}</h2>
      {image !== '' ? (
        <figure className="w-32 h-32 rounded-md overflow-hidden rotate-[30deg] absolute right-[-20px] bottom-[-10px]">
          <img src={image} alt="" />
        </figure>
      ) : null}
    </div>
  )
}
