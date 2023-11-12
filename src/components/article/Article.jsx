import React, { useEffect, useState } from 'react';
import './Article.css'
import { Link } from 'react-router-dom';

const Article = () => {

    // const [suggestedArticles, setsuggestedArticles] = useState(null);

    // const fetchData = async () => {
    //     const url = "";
    //     try {
    //         const response = await api.get(url);
    //         console.log(response.data);
    //         setsuggestedArticles(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    const suggestedArticles = [
        {
            id: 1,
            title: 'Article 1',
            date: "October 1, 2023",
            author: "John Smith",
            url: '/blog-content',
            image: '/bocau.jpg'
        },
        {
            id: 2,
            title: 'Article 2',
            date: "October 1, 2023",
            author: "John Smith",
            url: '/blog-content',
            image: '/chaomao.png'
        },
        {
            id: 3,
            title: 'Article 3',
            date: "October 1, 2023",
            author: "John Smith",
            url: '/blog-content',
            image: '/cu.jpg'
        },
        {
            id: 4,
            title: 'Article 4',
            date: "October 1, 2023",
            author: "John Smith",
            url: '/blog-content',
            image: '/hoami.png'
        },
    ];

    return (
        <div className="blogs-section">
            <h3>Cẩm nang về chim</h3>
            <div className='blogs-container'>
                {suggestedArticles.map((article, index) => (
                    <div key={index} className='blog-container'>
                        <Link to={article.url}>
                            <div className="blog-container-img">
                                <img src={article.image} alt={article.title} />
                            </div>
                            <h4 className='article-title'>{article.title}</h4>
                            <p className="article-meta">
                                <span className="article-date">{article.date}</span> . <span className="article-author">bởi {article.author}</span>
                            </p>
                            <p className='blog-container-link'>Xem chi tiết &raquo;</p>
                        </Link>
                    </div>
                ))}
            </div>
            <Link to="/blogs">
                <button type="submit" className='blogs-section-link-button'>Xem thêm</button>
            </Link>
        </div>
    );
};

export default Article;
