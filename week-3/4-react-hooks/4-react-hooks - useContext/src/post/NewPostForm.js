import React, { useState, useContext } from 'react'
import { StateContext } from '../contexts'

export default function NewPostForm() {

    const { state, dispatch } = useContext(StateContext)
    const { user } = state

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    function handleTitle(evt) {
        setTitle(evt.target.value)
    }

    function handleContent(evt) {
        setContent(evt.target.value)
    }

    function handleCreate() {
        const newPost = { title, content, author: user }
        dispatch({ type: 'CREATE_NEW_POST', ...newPost })
        setTitle('')
        setContent('')
    }

    return (
        <form onSubmit={e => { e.preventDefault(); handleCreate() }}>
            <div>Author: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input value={title} onChange={handleTitle} type="text" name="create-title" id="create-title" />
            </div>
            <textarea value={content} onChange={handleContent} />
            <input type="submit" value="Create" />
        </form>
    )
}
