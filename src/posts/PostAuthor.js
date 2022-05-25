import React, { useId } from 'react'
import { useSelector } from 'react-redux'

export const PostAuthor = ({ userId }) => {
  const author = useSelector((state) => {
    console.log(state)
    return state.users.find((user) => user.id === userId)
  })

  return <span>by {author ? author.name : 'Unknown author'}</span>
}
