import HomeScreen from "./src/screens/HomeScreen"
import AppProvider from './src/contexts/AppProvider'

const App = () => {
  return <AppProvider><HomeScreen /></AppProvider>
}

export default App;
