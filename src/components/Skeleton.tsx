import dayjs from 'dayjs'

import { useSelector, useDispatch } from 'react-redux'
import { fetchTokenApp } from '../api/api'
import { RootState } from '../store/store'
import { setToken } from '../store/appSlice'
import { Suspense, lazy, useEffect } from 'react'
import BasicMenu from './BasicMenu'
import Header from './Header'
import Spinner from './Spinner'
import { Route, Routes } from 'react-router-dom'

import CallbackView from '@/components/CallbackView'
import ProfileView from '@/components/ProfileView'
import ProtectedRoute from '@/components/ProtectedRoute'

const ListsView = lazy(() => import('@/components/Lists'))
const ExplorerView = lazy(() => import('@/components/Explorer'))
const GenreView = lazy(() => import('@/components/GenreView'))
const PlaylistView = lazy(() => import('@/components/PlaylistView'))
const NotFoundView = lazy(() => import('@/components/NotFound'))

export default function Skeleton() {
  const {
    credentials: { access_token, createdAt },
  } = useSelector((state: RootState) => state.app)
  const dispatch = useDispatch()

  const handleFetchAppToken = async () => {
    if (access_token && createdAt) {
      const expiredDate = dayjs(createdAt).add(1, 'hour')
      const currentDate = dayjs()
      if (!expiredDate.isAfter(currentDate)) {
        const token = await fetchTokenApp()
        dispatch(
          setToken({
            token,
          })
        )
      }
    } else {
      const token = await fetchTokenApp()
      dispatch(
        setToken({
          token,
        })
      )
    }
  }

  useEffect(() => {
    handleFetchAppToken()
  }, [])

  return (
    <div>
      <div className="bg-black min-h-screen flex p-2 gap-2">
        <aside className="min-w-[300px]">
          <BasicMenu />
        </aside>
        <main className="flex-grow">
          <Header />
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<ListsView />} />
              <Route path="/callback" element={<CallbackView />} />
              <Route path="/search" element={<ExplorerView />} />
              <Route path="/genre/:id" element={<GenreView />} />
              <Route path="/playlist/:id" element={<PlaylistView />} />
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="/user/:id" element={<ProfileView />} />
              </Route>
              <Route path="*" element={<NotFoundView />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  )
}
