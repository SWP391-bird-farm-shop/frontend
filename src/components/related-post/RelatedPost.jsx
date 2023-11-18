import React, { useEffect, useState } from 'react';
import './RelatedPost.css'
import api from '../utils/requestAPI';
import { Link } from 'react-router-dom';

const RelatedPost = ({blogType}) => {

    const [relatedPosts, suggestedRelatedPosts] = useState(null);

    const fetchData = async () => {
        const url = `/api/Blog/suggest-blogs-bloginformatinpage?type=${blogType}`;
        try {
            const response = await api.post(url);
            console.log(response.data);
            suggestedRelatedPosts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    // Dummy data for suggested articles
    // const suggestedRelatedPosts = [
    //     {
    //         id: 1,
    //         title: 'Article 1',
    //         date: "October 1, 2023",
    //         author: "John Smith",
    //         url: '/blog-content',
    //         image: '/bocau.jpg'
    //     },
    //     {
    //         id: 2,
    //         title: 'Article 2',
    //         date: "October 1, 2023",
    //         author: "John Smith",
    //         url: 'https://example.com/article2',
    //         image: '/chaomao.png'
    //     },
    //     {
    //         id: 3,
    //         title: 'Article 3',
    //         date: "October 1, 2023",
    //         author: "John Smith",
    //         url: 'https://example.com/article3',
    //         image: '/cu.jpg'
    //     },
    //     {
    //         id: 4,
    //         title: 'Article 4',
    //         date: "October 1, 2023",
    //         author: "John Smith",
    //         url: 'https://example.com/article3',
    //         image: '/hoami.png'
    //     },
    // ];

    return (
        <div className="related-post-section">
            <h3>Bài viết liên quan</h3>
            <div className='related-post-container'>
                {relatedPosts?.map((relatedpost) => (
                    <div key={relatedpost.blogId} className='related-post-item'>
                        <Link to={relatedpost.url}>
                            <div className="related-post-item-img">
                                <img src={relatedpost.image.imageUrl} alt={relatedpost.blogTitle} />
                            </div>
                            <h4 className='related-post-title'>{relatedpost.blogTitle}</h4>
                            <p className="related-post-meta">
                                <span className="related-post-date">{relatedpost.createAt}</span> . <span className="related-post-author">bởi {relatedpost.user.fullName}</span>
                            </p>
                            <p className='related-post-item-link'>Xem chi tiết &raquo;</p>
                        </Link>
                    </div>
                ))},
            </div>
        </div>
    );
};

export default RelatedPost;
