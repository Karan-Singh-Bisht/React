import UserContextProvider from "./context/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-black text-white">
      <UserContextProvider>
        <h1>React with chai</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </div>
  )
}

export default App
