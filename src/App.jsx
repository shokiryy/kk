import TechCard from "./compontes/card";
import { ComplexNavbar } from "./compontes/navabar";

export default function App() {
  return (
   <div>
      <div className="navbar mb-24">
      <ComplexNavbar/>
      </div>
       <div className="box flex justify-center gap-10">
        <TechCard/>
        <TechCard/>
        <TechCard/>
       </div>
   </div>
  );
}
