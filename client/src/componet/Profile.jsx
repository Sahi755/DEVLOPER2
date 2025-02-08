function Profile({name,age,post}){

   const setProfile=()=>{

    return `name:${name}
            Age:${age}
            post:${post}`

   }

   return setProfile();
    
}

export default Profile;