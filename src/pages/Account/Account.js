import UserLogOut from '../../components/UserLogOut/UserLogOut'

export default function() {
    return(
        <div>
            <h1 className='title'>Account</h1>
            <UserLogOut user={user} setUser={setUser} />
        </div>
    )
}