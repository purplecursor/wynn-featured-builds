import About from "./About";
import Builds from "./Builds";

export default function App() {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-950 h-screen text-white">
      <div className="text-center w-full basis-2/3">
        <Builds />
      </div>
      <div className="basis-1/3">
        <About />
      </div>
    </div>
  );
}