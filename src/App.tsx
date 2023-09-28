import Routes from "./routes";
import "./styles.css";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <RouterProvider router={Routes} />
    </div>
  );
}
