/* import { LearnComponents } from "./component/LearnComponents"; */

/* import { Header } from "./component/Header"; */
 import { Student } from "./component/student";
 import { Child } from "./component/Child";
function App() {

  return (
  <>
{/*   <>This is the project on react , used the fragment tag, without any additional div</>
    <LearnComponents/> */}
{/*     <Header/> */}
<Student name = "Niresh" age ={26} isMarried = {false}/>
<Student name = "Ram" age ={25} isMarried = {true}/>
<Student/>
<Child>
  <p>This is the child of child componenet</p>
  <p>Multiple child can be done</p>
</Child>
  </>
  );
}

export default App
