import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from '../Posts/Posts'
import Pagination from '../Pagination/Pagination';


function LandingPage() {

    const [posts, setPost] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);
    const URL = '/api/posts/getPosts';

    useEffect(() => {
        axios.get(URL).then(res => {
            if(res.data.success){
                console.log(res.data);
                setLoading(true);
                setPost(res.data.posts);
                setLoading(false);
            }else{
                alert('failed to upload posts');
            }
        })
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div> 
            <Posts posts={currentPosts} loading={loading}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>
    )
}

export default LandingPage
