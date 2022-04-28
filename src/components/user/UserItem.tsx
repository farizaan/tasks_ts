
import {FC} from 'react'
import {User} from '../../store/types/userTypes'
type Props =  {
    user: User
}
export const UserItem:FC<Props> = ({user}) => {
    return (
        <div>
            {user.name}
        </div>
    )

}