import React, { useState } from 'react'
import { addForm } from '../features/postSlice'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()
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
            dispatch({
              ...addForm(),
              payload: {
                id: nanoid(),
                title: title,
                content: content,
              },
            })
          }}
        >
          保存帖子
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
