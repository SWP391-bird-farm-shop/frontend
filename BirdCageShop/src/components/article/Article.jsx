import React from 'react';
import './Article.css'

const Article = () => {
    // Dummy data for suggested articles
    const suggestedArticles = [
        { title: 'Article 1', url: 'https://example.com/article1', image: '/bocau.jpg' },
        { title: 'Article 2', url: 'https://example.com/article2', image: '/chaomao.png' },
        { title: 'Article 3', url: 'https://example.com/article3', image: '/cu.jpg' },
        { title: 'Article 4', url: 'https://example.com/article3', image: '/hoami.png' },
    ];

    return (
        <div className="blogs-section">
            <h3>Cẩm nang về chim</h3>
            <div className='blogs-container'>
                {suggestedArticles.map((article, index) => (
                    <div key={index} className='blog-container'>
                        <a href={article.url}>
                            <div className="blog-container-img">
                                <img src={article.image} alt={article.title} />
                            </div>
                            <h4 className='article-title'>{article.title}</h4>
                            <p>Xem chi tiết &raquo;</p>
                        </a>
                    </div>
                ))}
            </div>
            <a href="/blogs">
                <button type="submit" className='blogs-section-link-button'>Xem thêm</button>
            </a>
        </div>
    );
};

export default Article;
