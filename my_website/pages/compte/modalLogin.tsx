import { login, register } from '../../user/userService'
import React, { useEffect, useRef } from 'react'

import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { BiUser } from 'react-icons/bi'

export default function test() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {}, [])
  const firstName = useRef(null)
  const lastName = useRef(null)
  const username = useRef(null)
  const usernameLogin = useRef(null)
  const email = useRef(null)
  const phoneNumber = useRef(null)
  const password = useRef(null)
  const passwordLogin = useRef(null)
  function registerusers() {
    register(
      firstName.current.value,
      lastName.current.value,
      username.current.value,
      password.current.value,
      email.current.value,
      phoneNumber.current.value
    )
  }
  function loginuser() {
    login(usernameLogin.current.value, passwordLogin.current.value)
  }

  return (
    <div>
      <BiUser onClick={handleOpen} />
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ width: 1000, height: 350, bgcolor: 'white', top: '20%', left: '17%' }} className="popup">
          <form onSubmit={registerusers} id="formpopup">
            <label>
              <input placeholder="Prénom" ref={firstName} className="inputAccount" id="formInput" type="text" />
            </label>
            <label>
              <input placeholder="Nom" ref={lastName} className="inputAccount" id="formInput" type="text" />
            </label>
            <label>
              <input
                placeholder="Nom d'utilisateur"
                ref={username}
                className="inputAccount"
                id="formInput"
                type="text"
              />
            </label>
            <label>
              <input
                placeholder="Mot de passe"
                ref={password}
                className="inputAccount"
                id="formInput"
                type="password"
              />
            </label>
            <label>
              <input placeholder="Email" ref={email} className="inputAccount" id="formInput" type="email" />
            </label>
            <label>
              <input
                placeholder="Numero de téléphone"
                ref={phoneNumber}
                className="inputAccount"
                id="formInput"
                type="tel"
              />
            </label>
            <button type="submit">S'inscrire</button>
          </form>

          <div className="separation">
            <div className="line"></div>
            <p className="or">Ou</p>
            <div className="line2"></div>
          </div>

          <form onSubmit={loginuser} id="formpopup">
            <label>
              Nom d'utilisateur <input ref={usernameLogin} className="inputAccount" id="formInput" type="text" />
            </label>
            <label>
              Mot de passe <input ref={passwordLogin} className="inputAccount" id="formInput" type="password" />
            </label>
            <button type="submit">Se connecter</button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}
