import MyForm from "./components/form";


function App() {
  return (
    <div className="App">
      <div className="min-h-10 text-center p-8" style={{backgroundColor:'#1FA2FF'}}>
        
        <span className="text-center font-bold text-black text-3xl md:p-8"  >ACCOMODATION RESERVATION FORM</span></div>
      <div className="p-4 bg-transparent" style={{backgroundColor: "#2a2a72",backgroundImage: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);"}}>
        
        <div className="grid">
          <div className=" grid md:grid-cols-2">
        <div className="z-20 w-full md:border-r">
       
      <MyForm/>
      <div className="block md:hidden font-thin text-grey text-lg p-3 border rounded-md m-8">
            <span>We provide accomodation facilities to those partaking in the events or workshops</span>
            <br/>
            <div className="">
            <span className="font-bold text-center">
              Rs. 100 per head<span className="font-thin"> (can be paid after reaching the campus)</span>
            </span>
            </div>
          </div>
      </div>
      <div className="hidden md:block">
        <img src="https://iste-tkmce.github.io/TOOLS/athena_blue.png" className="w-full h-fulll"></img>
        <div className="font-thin text-grey text-lg p-3 border rounded-md m-8">
            <span>We provide accomodation facilities to those partaking in the events or workshops</span>
            <br/>
            <div className="">
            <span className="font-bold text-center">
              Rs. 100 per head<span className="font-thin"> (can be paid after reaching the campus)</span>
            </span>
            </div>
          </div>
        </div>
        <div className="block md:hidden absolute top-25 h-screen grid place-items-center">
          <div className="opacity-50 z-0">
        <img src="https://iste-tkmce.github.io/TOOLS/athena_blue.png" className="w-full h-fulll opcaity-5" ></img>
        <img src="https://iste-tkmce.github.io/TOOLS/iste_blue.png" className="w-full h-fulll opcaity-5" ></img>
        </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
// background-color: #2a2a72;
// background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);