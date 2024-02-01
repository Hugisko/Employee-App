import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Postpage from "./pages/postpage/Postpage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/post",
      element: <Postpage />
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
