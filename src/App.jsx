import axios from "axios";
import { useState } from "react"
import Header from "./components/Header";
import Main from "./components/Main";

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
      [e.target.name]: e.target.value
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
      <Header message={message} />
      <Main handleFormdData={handleFormdData} handleSubmit={handleSubmit} formData={formData} />
    </>
  )
}

export default App
