import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Users from '../components/Users'
import UserCard from '../components/UserCard'
import { UsersProvider } from '../stores/users'


const Home = () => {

  
  const [user, setUser] = useState({
    id: 1,
    last_name:'Peck',
    first_name:'Kalli',
    photo: '/people/1.jpg',
    company: 'King, Hoeger and Mann',
    title: 'Doctor',
  },)
  
  return (
    <Layout>
      <Head>
        <title>Bevy take home project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UsersProvider>
        <Users setUser={setUser} user={user} />
        {user && <UserCard user={user} />}
      </UsersProvider>
    </Layout>
  )
}

export default Home
