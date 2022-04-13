import React, { Component } from 'react'

export default class ClassRow extends Component {
    render() {
        const post = this.post
        return (
            <tr>
                <td>{post?.user.first_name}</td>
                <td>{post?.date_created}</td>
                <td>{post?.body}</td>
            </tr>
        )
    }
}