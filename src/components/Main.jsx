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
      </div>

    </main>
  )
}

export default Main
