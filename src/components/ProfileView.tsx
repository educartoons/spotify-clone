import { useSelector } from 'react-redux'
import ErrorBoundary from './ErrorBoundary'
import { RootState } from '@/store/store'

function ProfileView() {
  const { user } = useSelector((state: RootState) => state.user)

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

const ProfileViewWithErrorBoundary = () => {
  return (
    <ErrorBoundary>
      <ProfileView />
    </ErrorBoundary>
  )
}

export default ProfileViewWithErrorBoundary
