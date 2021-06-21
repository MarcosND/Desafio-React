import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import UserCard from '../../components/userCard';

import './Home.css';


function Home() {

  const [makeRequest, setMakeRequest] = useState(false)

  const [user, setUser] = useState('')
  const [avatar, setAvatar] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [socialMedia, setSocialMedia] = useState('')
  const [repos, setRepos] = useState('')
  const [bio, setBio] = useState('')
  const [location, setLocation] = useState('')

  const inputElement = useRef()
  
  async function getProfile(){
    const res = await axios.get(`https://api.github.com/users/${user}`)
    setAvatar(res.data.avatar_url)
    setName(res.data.name)
    setCompany(res.data.company)
    setSocialMedia(res.data.twitter_username)
    setRepos(res.data.public_repos)
    setBio(res.data.bio)
    setLocation(res.data.location)
    console.log(res)
  }

  useEffect(() => {
    inputElement.current.focus()
  }, [])

  return (
    <section className='Home'>
    <div className="main-container">
        <input type="text" placeholder="Insira o nome do usuário" value={user} ref={inputElement} onChange={(event) => setUser(event.target.value)}/>
        <button onClick={()=> {setMakeRequest(true); getProfile()}}>BUSCAR</button>
    </div>
    {makeRequest && ( 
    <UserCard userName={name} image={avatar} company={company} social={socialMedia} repos={repos} bio={bio} location={location}/>
    )}
    </section>
  );
}

export default Home;
