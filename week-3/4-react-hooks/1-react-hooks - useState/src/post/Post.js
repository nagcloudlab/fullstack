import React from 'react'

export default function Post(props) {
    let { title, content, author } = props
    return (
        <div>
            <h3>{title}</h3>
            <div>{content}</div>
            <br />
            <i>Written by <b>{author}</b></i>
        </div>
    )
}
