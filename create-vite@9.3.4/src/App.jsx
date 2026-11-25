import Home from './assets/Home.jsx'
import './App.css'
function Data(prop){
  return(
    <>
      <h1>this is Data component</h1>
      <h2>vainavi</h2>
      <h1>{prop.obj}</h1>
      <h1>{prop.o}</h1>
    </>
  )
}
function Players(data) {
  return (
    <>
     <div className="container">
        {
          data.obj1.map((player) => {
            console.log(player);

            return (
              <div className="card" key={player.id}>
                <h2>{player.team}</h2>
                <p>Player ID: {player.id}</p>
              </div>
            );
          })
        }
      </div>
    </>
  )
}
function App(){
  let players_data = [{
      id:100,
      team:"India"
    },
    {
      id:101,
      team:"England"
    },
    {
      id:102,
      team:"Australia"
    }
  ]
  return (
    <>
      <h1>this is App component</h1>
      <h2>veyelunthal</h2>
      <Home/>
      <Data obj="sece" o="student"/>
       <Players obj1={players_data} />
    </>
  )
}
export default App