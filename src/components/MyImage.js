const User = [{
    name: 'John',
    imageUrl: 'https://www.w3schools.com/howto/img_avatar.png',
    imageSize: 90
},
{
    name: 'Abraham',
    imageUrl: 'https://www.w3schools.com/howto/img_avatar.png',
    imageSize: 90
},
{
    name: 'David',
    imageUrl: 'https://www.w3schools.com/howto/img_avatar.png',
    imageSize: 90
}]
const Profile = () => {
    return (
        <div>
            {User.map((user,index)=>(
                <img className="avatar"
                key={index}
                src={user.imageUrl}
                alt={user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
            ))}

        </div>
    )
}
export default Profile;