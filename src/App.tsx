import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { UserContextProvider } from '@/context/user-context'
import { AppContextProvider } from '@/context/app-context'
import Skeleton from '@/components/Skeleton'
import { store } from '@/store/store'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000 * 1000,
    },
  },
})

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Skeleton />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  )
}
