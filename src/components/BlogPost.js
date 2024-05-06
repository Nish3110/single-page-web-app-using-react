import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css'; // Import your existing styles.css file

const blogPosts = [
  {
    id: 1,
    title: 'Artificial Intelligence',
    image: import('../images/artificialintelligence.jpg').then(image => image.default),
    description: 'Discover the latest advancements in artificial intelligence technology. Learn about machine learning, natural language processing, and more.'
  },
  {
    id: 2,
    title: 'Augmented Reality',
    image: import('../images/augmentedreality.jpg').then(image => image.default),
    description: 'Explore the world of augmented reality and its applications in various industries. Learn about AR technology, development tools, and use cases.'
  },
  {
    id: 3,
    title: 'Blockchain',
    image: import('../images/blockchain.jpg').then(image => image.default),
    description: 'Dive into the world of blockchain technology and cryptocurrencies. Learn about blockchain networks, smart contracts, and decentralized applications.'
  },
  {
    id: 4,
    title: 'Cloud Computing',
    image: import('../images/cloudcomputing.jpg').then(image => image.default),
    description: 'Explore cloud computing services and platforms. Learn about cloud deployment models, storage options, and cloud security.'
  },
  {
    id: 5,
    title: 'Cyber Security',
    image: import('../images/cybersecurity.jpg').then(image => image.default),
    description: 'Learn about cybersecurity threats, vulnerabilities, and best practices. Explore cybersecurity tools, techniques, and defense strategies.'
  },
  {
    id: 6,
    title: 'Data Science',
    image: import('../images/datascience.jpg').then(image => image.default),
    description: 'Discover the interdisciplinary field of data science. Learn about data analysis, machine learning, data visualization, and big data.'
  },
  {
    id: 7,
    title: 'DevOps',
    image: import('../images/devops.jpg').then(image => image.default),
    description: 'Explore the principles and practices of DevOps. Learn about continuous integration, continuous delivery, infrastructure as code, and more.'
  },
  {
    id: 8,
    title: 'Internet of Things (IoT)',
    image: import('../images/iot.jpg').then(image => image.default),
    description: 'Discover the exciting world of the Internet of Things. Learn about IoT devices, sensors, connectivity protocols, and IoT applications.'
  },
  {
    id: 9,
    title: 'Cloud Computing',
    image: import('../images/cloudcomputing.jpg').then(image => image.default),
    description: 'Explore advanced topics in cloud computing. Learn about serverless computing, containerization, hybrid cloud, and cloud-native architectures.'
  },
  {
    id: 10,
    title: 'Web Development',
    image: import('../images/webdevelopment.jpg').then(image => image.default),
    description: 'Learn about web development technologies and frameworks. Explore front-end development, back-end development, full-stack development, and web design.'
  },
];

function BlogPost() {
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const postsWithImages = await Promise.all(blogPosts.map(async post => {
        const loadedImage = await post.image;
        return { ...post, image: loadedImage };
      }));
      setLoadedPosts(postsWithImages);
    };

    loadImages();
  }, []);

  return (
    <div className="blogpost-container">
      <h2>IT Blogs</h2>
      <div className="blog-cards-container">
        {loadedPosts.map(post => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-card-image" />
            <div className="blog-card-content">
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-description">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPost;

