import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BasicMenu from './components/BasicMenu'
import Explorer from './components/Explorer'
import Header from './components/Header'
import Lists from './components/Lists'
import NotFound from './components/NotFound'
import { UserContextProvider } from './context/user-context'
import { AppContextProvider } from './context/app-context'

export default function App() {
  // JSX
  return (
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
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </UserContextProvider>
    </AppContextProvider>
  )
}
