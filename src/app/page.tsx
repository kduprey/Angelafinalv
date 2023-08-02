import Angela from "../Components/Angela";
import Breath from "../Components/Breath";
import About from "../Components/About/About";

export default function Page() {
  return (
    <div className="App">
      <h1> Home </h1>
      <Angela />
      <Breath />
      <About />
    </div>
  );
}
