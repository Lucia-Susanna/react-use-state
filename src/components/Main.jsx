const Main = (prop) => {
  const languagesList = prop.languagesList
  return (
    <main>
      <div className="container">
        <div className="buttons">
          <ul>
            {languagesList.map(item => (
              <li key={item.id}>
                <button>{item.title}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h4>{languagesList[0].title}</h4>
          <p>{languagesList[0].description}</p>
        </div>
      </div>

    </main>
  )
}

export default Main
