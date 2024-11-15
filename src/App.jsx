import TechCard from "./compontes/card";
import { FooterWithLogo } from "./compontes/futer";
import { ComplexNavbar } from "./compontes/navabar";

export default function App() {
  return (
   <div>
      <div className="mb-24 navbar">
      <ComplexNavbar/>
      </div>
       <div className="flex justify-center gap-10 box">
        <TechCard/>
        <TechCard/>
        <TechCard/>
       </div>
       <FooterWithLogo/>
   </div>
  );
}
