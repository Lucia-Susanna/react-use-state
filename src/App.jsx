import Header from "./components/Header"
import Main from "./components/Main"

import languages from "./data/languages"

const App = () => {
  return (
    <>
      <Header />
      <Main languagesList={languages} />
    </>
  )
}

export default App

