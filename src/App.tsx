import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import BasicMenu from './components/BasicMenu'
import Header from './components/Header'

import { UserContextProvider } from './context/user-context'
import { AppContextProvider } from './context/app-context'
import Spinner from './components/Spinner'
import CallbackView from './components/CallbackView'
import ProfileView from './components/ProfileView'
import ProtectedRoute from './components/ProtectedRoute'
import Calculator from './components/Calculator'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000 * 1000,
    },
  },
})

const ListsView = lazy(() => import('./components/Lists'))
const ExplorerView = lazy(() => import('./components/Explorer'))
const GenreView = lazy(() => import('./components/GenreView'))
const PlaylistView = lazy(() => import('./components/PlaylistView'))
const NotFoundView = lazy(() => import('./components/NotFound'))

export default function App() {
  // JSX
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <div className="bg-black min-h-screen flex p-2 gap-2">
              <aside className="min-w-[300px]">
                <BasicMenu />
                <Calculator />
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
          </BrowserRouter>
        </UserContextProvider>
      </AppContextProvider>
    </QueryClientProvider>
  )
}
