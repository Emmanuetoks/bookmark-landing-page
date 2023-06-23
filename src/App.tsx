import Home from "./Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Feature from "./Feature";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="features" element={<Feature />} />
      </>
      
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
