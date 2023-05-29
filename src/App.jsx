import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CrearServicio from "./components/layout/CrearServicio"
import ListarServicios from "./components/layout/ListarServicios"
import EditarServicio from "./components/layout/EditarServicio"

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1> ,
    errorElement: <h1>404 not found</h1>
  },
  {
    path: '/crear',
    element: <CrearServicio />,
    errorElement: <h1>404 not found</h1>
  },
  {
    path: '/listar',
    element: <ListarServicios />,
    errorElement: <h1>404 not found</h1>
  },
  {
    path: '/editar',
    element: <EditarServicio />,
    errorElement: <h1>404 not found</h1>
  }
])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
