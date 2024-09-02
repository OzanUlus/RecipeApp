import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Profile.css'

export const Profile = () => {
  const [user , setUser] = useState({})

  useEffect(() =>{

    const getUserProfile = async() => {

      const response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile",{
        headers:{
          "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).access_token}` 
        }
      }).then(response => {
        console.log(response);
        setUser(response.data)
      })
    }
    getUserProfile()
  },[])
  return (
    <div className="user-card">
    <img src={user.avatar} alt={user.name} className="user-avatar" />
    <div className="user-info">
      <h2 className="user-name">Ad : {user.name}</h2>
      <p className="user-email">Role :{user.role}</p>
      <p className="user-bio">Güncelleme Tarihi :{user.updatedAt}</p>
    </div>
  </div>
  )
}
export default Profile 