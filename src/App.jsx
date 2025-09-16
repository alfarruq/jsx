
import './App.css'

function App() {

  let ism = `Ali`

  let date = new Date()

  let hour = new Date().getHours()

  let num = Math.floor(Math.random() * 100)

  let isLight = hour > 5 && hour <  19

  return (
    <div className={ isLight ? 'wrapper light': 'wrapper dark' } >


      <div className={`card ${isLight ? 'bg-light': 'bg-dark'}`} >
        <h2>Hello my name is: <span>name</span> </h2>
        <h2>This is the day: <span> {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}</span></h2>

      
        <h1>{num}</h1>
      </div>

    </div>

  )

}

export default App;
