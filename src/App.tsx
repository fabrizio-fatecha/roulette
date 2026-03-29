import Roulette from './components/Roulette'

function App() {
  return (
    <div
      style={{
        width: '100%',
        height: '75vh',
        backgroundImage: `url('/fondo.png')`, 
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundColor : '#eef0f1',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '120px' // ajustás esto para bajar la ruleta
      }}
    >
      <Roulette></Roulette>
    </div>
  )
}

export default App
