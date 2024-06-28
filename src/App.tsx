import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import BasicMenu from './components/BasicMenu'
import Explorer from './components/Explorer'
import Header from './components/Header'
import Lists from './components/Lists'
import NotFound from './components/NotFound'
import { UserContextProvider } from './context/user-context'
import { AppContextProvider } from './context/app-context'
import GenreView from './components/GenreView'
import PlaylistView from './components/PlaylistView'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000 * 1000,
    },
  },
})

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
              </aside>
              <main className="flex-grow">
                <Header />
                <Routes>
                  <Route path="/" element={<Lists />} />
                  <Route path="/search" element={<Explorer />} />
                  <Route path="/genre/:id" element={<GenreView />} />
                  <Route path="/playlist/:id" element={<PlaylistView />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </UserContextProvider>
      </AppContextProvider>
    </QueryClientProvider>
  )
}
