import React, { useState } from 'react'
import { addForm } from '../features/posts/postSlice'
import { useDispatch, useSelector } from 'react-redux'
const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  const canSave = title && content && userId
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))
  return (
    <section>
      <h2>添加新帖子</h2>
      <form>
        <label htmlFor="postTitle">帖子标题:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value)
          }}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">内容：</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => {
            setContent(e.target.value)
          }}
        />
        <button
          type="button"
          onClick={() => {
            dispatch(addForm(title, content, userId))
          }}
          disabled={!canSave}
        >
          保存帖子
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
