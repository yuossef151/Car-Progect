import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import router from './routes/routes'
import { RouterProvider } from 'react-router-dom'

console.log(router);

function App() {

  return (
    <>
     <RouterProvider router={router} />

    </>
  )
}

export default App
