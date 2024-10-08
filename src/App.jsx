import Navigation from "./routes/Navigation"
import {Toaster} from 'react-hot-toast'

function App() {

  return (
    <>
      <Navigation />

      <Toaster />
    </>
  )
}

export default App


export const backend = 'http://localhost:4000';