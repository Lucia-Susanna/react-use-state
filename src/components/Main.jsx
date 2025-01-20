import { useState } from "react"

const Main = (prop) => {
  const [selectedLanguage, setSelectedLanguage] = useState(1)
  const languagesList = prop.languagesList


  // }
  return (
    <main>
      <div className="container">
        <div className="buttons">

          <ul>
            {languagesList.map(item => (
              <li key={item.id}>
                <button onClick={() => setSelectedLanguage(item)}>{item.title}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h4>{selectedLanguage.title}</h4>
          <p>{selectedLanguage.description}</p>
        </div>
      </div>

    </main>
  )
}

export default Main
