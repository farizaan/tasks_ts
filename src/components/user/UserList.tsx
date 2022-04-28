

import { useEffect } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { UserItem } from "./UserItem"
import * as userActionCreators from "../../store/action/userActionCreators"
import { useActions } from "../../hooks/useActions"
export function UserList() {

    const { users, error, loading } = useTypedSelector(state => state.user)
    const { fetchUsers } = useActions(userActionCreators)
    useEffect(() => {
        fetchUsers()
    }, [])


    if (loading) {
        return (
            <h1>Loading users</h1>
        )
    }
    if (error) {
        return (
            <h1>{error}</h1>
        )
    }
    return (
        <div>
            {users.map(user => (
                <UserItem user={user} key={user.id}></UserItem>
            ))}
        </div>
    )
}

