import './App.css'

function App() {

  return (
    <>
      <h1>Welcome to Tic Tac Toe App</h1>
      <MyButton disabled={false} title="This is button title"></MyButton>
    </>
  )
}

function MyButton({title, disabled}:{title:string, disabled: boolean}){
  return (
    <button disabled={disabled}>{title}</button>
  )
}
export default App
