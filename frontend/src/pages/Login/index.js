import React, { useState } from 'react'
import api from '../../services/api'

export default function Login({ history }) {
  const [email, setEmail] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    api.post('/sessions', { email })
      .then(res => localStorage.setItem('user', res.data._id))
      .catch(e => console.warn(e))

    return history.push('/dashboard')
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          id="email"
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  )
}
