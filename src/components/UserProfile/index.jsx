import withLoading from "../../HOC/withLoading"

const UserProfile = withLoading(() => {    
    return <>
        <h3>User</h3>
        <div>Name: Minh</div>
        <div>Age: 17</div>
        <div>Address: HN</div>
        <div>ID: 01</div>    
    </>
})

export default UserProfile