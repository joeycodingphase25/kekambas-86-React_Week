import React, { useState, useEffect } from 'react'
import HookChange from '../components/HookChange';
import ClassRow from '../components/ClassRow';

export default function CommentTable(props){
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Use Effect")
        fetch(`https://kekambas-bs.herokuapp.com/posts`)
            .then(res => res.json())
            .then(data => {
                let posts = data;
                setPosts(posts)
            })
    }, [])

    return (
        <>
            <h1 className='text-center mt-5'>Get The Posts!</h1>
            <HookChange setCount={setCount} count={count} />
            <h4 className='text-center my-2'>Post Title: {posts[count]?.title}</h4>
            <table className='table'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Date Created</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {<ClassRow post={posts[count]} key={count} />}
                </tbody>
            </table>
        </>
    )
}