import { useUserContext } from '../context/user-context'

export default function ProfileView() {
  const { user } = useUserContext()

  return (
    <div className="p-10">
      <div className="flex items-center gap-4">
        <figure className="w-40 h-40 rounded-full overflow-hidden">
          <img src={user?.images[1].url} alt="" />
        </figure>
        <h2 className="text-white text-5xl font-bold">{user?.display_name}</h2>
      </div>
    </div>
  )
}
