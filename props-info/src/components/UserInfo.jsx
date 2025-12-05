import UserCard from "./UserCard";

 const Userdata={
    user1:{
        img:"https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
        name:"Vishal Chavda",
        age:20,
        city:"Ahmedabad"
    },
    user2:{
        img:"https://cdn-icons-png.flaticon.com/512/219/219983.png",
        name:"Sagar Chavda",
        age:22,
        city:"Rajkot"
    },
    user3:{
        img:"https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
        name:"Roshni",
        age:18,
        city:"Surat"
    },
 }

const UserInfo = () => {
  return (
    <>
      <UserCard {...Userdata.user1} />
      <UserCard {...Userdata.user2} />
      <UserCard {...Userdata.user3} />
    </>
  );
};

export default UserInfo;
