import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"

function App() {

    return (
        <div id="box">
            <h1>Games Play</h1>
            <Header />

            <main id="main-content">
                <Home />
            </main>

        </div>
    )
}

export default App
