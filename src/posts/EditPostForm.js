import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { updateForm } from '../features/posts/postSlice'

const EditPostForm = ({ match }) => {
  const { postId } = match.params
  const post = useSelector((state) => state.posts.find((post) => post.id === postId))
  console.log('edit post')
  console.log(post)
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <section>
      <h2>编辑帖子</h2>
      <form>
        <label htmlFor="postTitle">帖子标题：</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
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
      </form>
      <button
        type="button"
        onClick={() => {
          if (title && content) {
            dispatch({
              ...updateForm(),
              payload: { id: post.id, title: title, content: content },
            })
            history.push(`/posts/${postId}`)
          }
        }}
      >
        保存帖子
      </button>
    </section>
  )
}

export default EditPostForm
