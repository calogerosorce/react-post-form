import { useState } from "react"


function App() {
  const api = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    check: 'pubblico'
  })
  function handleFormdData(e) {
    const value =
      e.target.name === e.target.value ?
        e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <div className="container">
        <header>
          <h1>INVIA I TUOI DATI</h1>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Author</label>
              <input type="text" name='author' className="form-control" value={formData.author} onChange={handleFormdData} />
            </div>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" name='title' className="form-control" value={formData.title} onChange={handleFormdData} />
            </div>
            <div className="mb-3">
              <label className="form-label">Body</label>
              <input type="text" name='body' className="form-control" value={formData.body} onChange={handleFormdData} />
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-2">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="check" value='pubblico' checked={formData.check === 'pubblico'} onChange={handleFormdData} />
                  <label className="form-check-label">
                    Pubblico
                  </label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="check" value='bozza' checked={formData.check === 'bozza'} onChange={handleFormdData} />
                  <label className="form-check-label">
                    Bozza
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </main>
      </div>
    </>
  )
}

export default App
