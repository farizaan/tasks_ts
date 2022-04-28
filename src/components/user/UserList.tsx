

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useUserActions } from "../../hooks/useUserActions"
import { fetchUsers } from "../../store/action/userActionCreators"
import { User } from "../../store/types/userTypes"
import { UserItem } from "./UserItem"

export function UserList() {

    const { users, error, loading } = useTypedSelector(state => state.user)
    const dispatch = useDispatch()
    const { fetchUsers } = useUserActions()
    useEffect(() => {
        // dispatch(fetchUsers() as any)
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