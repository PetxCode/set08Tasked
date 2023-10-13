import { RouterProvider } from "react-router-dom";
import { mianRouter } from "./router/mainRouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={mianRouter} />
    </div>
  );
};

export default App;
