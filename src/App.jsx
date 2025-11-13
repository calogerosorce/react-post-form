import axios from "axios";
import { useState } from "react"


function App() {
  const api = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'
  const copyFormData = {
    author: '',
    title: '',
    body: '',
    public: true
  }
  const [formData, setFormData] = useState(copyFormData)
  const [message, setMessage] = useState({
    text: null,
    type: ''
  })
  function handleFormdData(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault()

    axios.post(api, formData, {
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      console.log(res);
      if (res.status === 201) {
        setMessage({ text: 'Hai inviato i dati con successo', type: 'success' })
      }
      setFormData(copyFormData)
    }).catch(err => {
      setMessage({ text: err.message, type: 'danger' })
    })

  }

  return (
    <>
      <div className="container">
        <header>
          <h1>INVIA I TUOI DATI</h1>
          {message.text && <p className={`text-${message.type}`}>{message.text}</p>}
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
                  <input className="form-check-input" type="radio" name="public" value={true} checked={formData.name} onChange={handleFormdData} />
                  <label className="form-check-label">
                    Pubblico
                  </label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name='public' value={false} checked={formData.name} onChange={handleFormdData} />
                  <label className="form-check-label">
                    Bozza
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Invia dati</button>
          </form>
        </main>
      </div>
    </>
  )
}

export default App
