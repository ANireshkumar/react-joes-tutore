

export const Header = () => {
  let customCss = "code";// adding CSS 
  const isLogged = true; // Conditional rendering
const greeting = isLogged ? <p>Welcome! you have logged IN</p> : <p>Please login???</p>

const items = ["Item1","Item2","Item3","Item4"];   // lists the array of data
  return (
    <>
    <div><h1 className="header">Linking the header to the app.jsx</h1>
    <h2 className="add">adding the className</h2>
    <h3 className="css">Css is imported directly in the main.jsx</h3>
    <div className="para"><p>This is to understand how the jsx works , how we are importing the components to the main.jsx or the app.jsx</p>
    <p>We have added the styling to the lines we have added</p>
    <p>we have uderstant how the class name should be added (className)</p></div>
    <p>This lines are writen inside the javascript like a html code , jsx with the help of babel will 
      automatically convert it and shows like a html
    </p>

    <div>
    <h3>javascript Expression in JSX</h3>  
    <p className={customCss}>25+25={25 + 25 }</p>
    <p style={{fontSize:"20PX"}}>This is direct styling</p>
    <h3>Conditional rendering</h3>
    <p>{greeting}</p>
    <h3>Jsx with list</h3>
    <ul>
      {items.map((items,index) =>(<li key={index}>{items}</li>))}
    </ul>
    </div>
    </div>
    </>
  )
}
