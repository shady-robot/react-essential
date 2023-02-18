import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/userSlice'

export const PostAuthor = ({ userId }) => {
  const users = useSelector((state) => selectAllUsers(state))
  const author = useSelector((state) =>
    users.find((user) => user.id === userId)
  )

  return <span>by {author ? author.name : 'Unknown author'}</span>
}
