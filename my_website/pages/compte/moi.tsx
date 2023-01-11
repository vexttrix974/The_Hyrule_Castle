import Footer from '../footer'
import NavBar from '../header'
import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import { useEffect, useState, useRef } from 'react'
import { fetchUser, modifyUsers } from '../../user/userService'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'

let Bool = false
export default function moi() {
  const username = useRef(null)
  const email = useRef(null)
  const phoneNumber = useRef(null)
  const password = useRef(null)

  const [value, setValue] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchUser(getCookie('username')).then((response) => {
      setData(response.data)
      setCookie('Id', response.data.id)
    })
  }, [])
  // const [showPassword, setShowPassword] = useState('')
  const [censoredPassword, setCensoredPassword] = useState('')
  let hiddenPassword = ''
  function compte() {
    if (data !== null) {
      for (let i = 0; data.password.length > i; i += 1) {
        hiddenPassword = hiddenPassword + '*'
      }
      setCensoredPassword(hiddenPassword)
      hiddenPassword = ''
    }
  }
  function logout() {
    removeCookie('Authorization', { path: '/' })
    removeCookie('Id', { path: '/' })
    removeCookie('OrderId', { path: '/' })
    removeCookie('username', { path: '/' })
    window.location.replace('http://localhost:3001/')
  }
  function handleclick() {
    if (data !== null && Bool === false) {
      Bool = true
      setCensoredPassword(data.password)
    } else if (Bool === true) {
      compte()
      Bool = false
    }
  }
  function modify() {
    modifyUsers(
      data.firstName,
      data.lastName,
      username.current.value,
      email.current.value,
      phoneNumber.current.value,
      password.current.value
    )
  }
  return (
    <div>
      <NavBar />
      <Box id="BoxInfo">
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              TabIndicatorProps={{ style: { backgroundColor: '#eff8f6' } }}
              textColor="inherit"
            >
              <Tab
                onClick={compte}
                disableRipple
                style={{ minWidth: '50%' }}
                className="account_title"
                label="Compte"
                value="1"
              />
              <Tab disableRipple style={{ minWidth: '50%' }} className="account_title" label="Paramètre" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1" className="panelInfo">
            <div className="divPanel">
              <span className="accountInfo">Prenom</span> {data && <p>{data.firstName} </p>}
              <span className="accountInfo">Nom</span> {data && <p>{data.lastName}</p>}
              <span className="accountInfo">Nom d'utilisateur</span> {data && <p>{data.username} </p>}
            </div>
            <div className="divPanel">
              <span className="accountInfo">Email</span> {data && <p>{data.email} </p>}
              <span className="accountInfo">Mot de passe</span>{' '}
              {data && (
                <p>
                  {censoredPassword} <BsFillEyeSlashFill className="BsFillEyeSlashFill" onClick={handleclick} />{' '}
                </p>
              )}
              <span className="accountInfo">Numero de téléphone</span> {data && <p>{data.phoneNumber} </p>}
              <button className="Logout" onClick={logout}>
                {' '}
                Deconnection{' '}
              </button>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div>
              <form onSubmit={modify} className="formAccount">
                <label>
                  Nom d'utilisateur{' '}
                  <input
                    ref={username}
                    className="inputAccount"
                    id="formInput"
                    type="text"
                    defaultValue={data && data.username}
                  />
                </label>
                <label>
                  Email{' '}
                  <input
                    ref={email}
                    className="inputAccount"
                    id="formInput"
                    type="email"
                    defaultValue={data && data.email}
                  />
                </label>
                <label>
                  Numero de telephone{' '}
                  <input
                    ref={phoneNumber}
                    className="inputAccount"
                    id="formInput"
                    type="tel"
                    defaultValue={data && data.phoneNumber}
                  />
                </label>
                <label>
                  Mot de passe{' '}
                  <input
                    ref={password}
                    className="inputAccount"
                    id="formInput"
                    type="password"
                    defaultValue={data && data.password}
                  />
                </label>
                <input type="submit" value="SUBMIT" />
              </form>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
      <Footer />
    </div>
  )
}
