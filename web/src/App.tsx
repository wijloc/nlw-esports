interface ButtonProps{
  title: string
}

function Button(props: ButtonProps){
  return (
    <button>
      { props.title }
    </button>
  )
}

function App() {
  return <>
  <Button title='Enviar'/>
  <Button title='Enviar2'/>
  </>
}

export default App
