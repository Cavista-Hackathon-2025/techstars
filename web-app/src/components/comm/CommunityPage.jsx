import React, { useState, useEffect, useContext } from 'react';
import { getAISuggestions } from '../utils/aiServices';
import PageContext from "../page/PageContext";
import styles from './Community.module.css';
import newimage from "../../assets/images/baby.jpg"
import preg1 from '../../assets/images/preg1.jpg'
import preg2 from '../../assets/images/preg2.jpg'
import preg3 from '../../assets/images/preg3.jpg'
import preg4 from '../../assets/images/preg4.jpg'
import preg6 from '../../assets/images/preg6.jpg'
import preg8 from '../../assets/images/preg9.jpg'
import { Like } from '../../assets/Ui/Like';
import { Comments } from '../../assets/Ui/Comment';
import { ArrowRetweetFill16 } from '../../assets/Ui/Retweet';

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const ctx = useContext(PageContext);
  const { changePage } = ctx;

  const images = [preg1, preg2, preg3,newimage]; // Array of images

  useEffect(() => {
    setPosts([
      {
        id: 1,
        userId: 1,
        title: "I Need Help with My Baby’s Sleep Schedule",
        content: "I’m struggling to get my baby to sleep through the night. Any tips?",
        comments: [{ userId: 2, comment: "Try establishing a bedtime routine and keep the room dark!" }],
        likes: 5,
        retweets: 3,
        img: images[Math.floor(Math.random() * images.length)] // Randomly assign an image
      },
      {
        id: 2,
        userId: 1,
        title: "Best Foods During Pregnancy",
        content: "What are some foods that helped you during pregnancy?",
        comments: [],
        likes: 2,
        retweets: 1,
        img: images[Math.floor(Math.random() * images.length)] // Randomly assign an image
      },
      {
        id: 3,
        userId: 3,
        title: "Postpartum Mental Health Tips",
        content: "What are some ways to manage stress and anxiety after childbirth?",
        comments: [{ userId: 4, comment: "Journaling and light exercises really helped me!" }],
        likes: 7,
        retweets: 4,
        img: images[Math.floor(Math.random() * images.length)] // Randomly assign an image
      },
      {
        id: 4,
        userId: 5,
        title: "Morning Sickness Remedies",
        content: "How did you deal with morning sickness in your first trimester?",
        comments: [{ userId: 6, comment: "Ginger tea and small frequent meals worked wonders for me!" }],
        likes: 3,
        retweets: 2,
        img: images[Math.floor(Math.random() * images.length)] // Randomly assign an image
      }
    ]);
  }, []);

  const handlePostSubmit = () => {
    if (newPost.title && newPost.content) {
      const aiSuggestion = getAISuggestions(newPost.content);
      const newPostData = { 
        id: posts.length + 1, 
        userId: 1, 
        title: newPost.title, 
        content: newPost.content, 
        comments: aiSuggestion ? [{ userId: 0, comment: aiSuggestion }] : [], 
        likes: 0, 
        retweets: 0,
        img: images[Math.floor(Math.random() * images.length)] // Randomly assign an image
      };
      setPosts([newPostData, ...posts]);
      setNewPost({ title: '', content: '' });
    }
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleRetweet = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, retweets: post.retweets + 1 } : post
    ));
  };

  const handleComment = (postId) => {
    // Simple action to show how it could be expanded for a comment feature
    const commentText = prompt('Enter your comment');
    if (commentText) {
      setPosts(posts.map(post => 
        post.id === postId ? { 
          ...post, 
          comments: [...post.comments, { userId: 0, comment: commentText }] 
        } : post
      ));
    }
  };

  return (
    <div className={styles.containerBody}>
      <div className={styles.postWrapper}>
        <header>
          <h1 className={styles.greeting}>Beautiful Community, just for you Kemi</h1>
        </header>
       
        <div className={styles.compose}>
          <input 
            type="text" 
            placeholder="What's happening?" 
            className={styles.input} 
            value={newPost.title} 
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} 
          />
          <textarea 
            placeholder="Share your thoughts..." 
            className={styles.textarea} 
            value={newPost.content} 
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })} 
          />
          <button onClick={handlePostSubmit} className={styles.postButton}>Tweet</button>
        </div>
      </div>

      <div className={styles.container}>
        <div>
          <h3>Interests</h3>
          <div className={styles.interestWrapper2}>
            <div><img src={preg3} alt="" /> <h4>Weight Journey</h4></div>
            <div><img src={preg8} alt="" /> <h4>Postpartum Care</h4></div>
            <div><img src={preg6} alt="" /> <h4>Maternal Care</h4></div>
            <div><img src={preg1} alt="" /> <h4>Birth Preparation</h4></div>
          </div>
        </div>

        <h3>Posts</h3>
        <div className={styles.posts}>
          {posts.map((post) => (
            <div key={post.id} className={styles.postCard}>
              <img src={post.img} alt="" className={styles.postImage} /> {/* Use the random image here */}
              <div className={styles.postHeader}>
                <h3>{post.title}</h3>
              </div>
              <p className={styles.postContent}>{post.content}</p>
              <div className={styles.actions}>
                <button onClick={() => handleLike(post.id)} className={styles.actionButton}>
                  <Like/> ({post.likes})
                </button>
                <button onClick={() => handleRetweet(post.id)} className={styles.actionButton}>
                  <ArrowRetweetFill16/> ({post.retweets})
                </button>
                <button onClick={() => handleComment(post.id)} className={styles.actionButton}>
                  <Comments/> ({post.comments.length})
                </button>
              </div>
              <h4>Comments</h4>
              {post.comments.length > 0 ? (
                post.comments.map((comment, index) => <p key={index} className={styles.comment}>{comment.comment}</p>)
              ) : (
                <p className={styles.noComments}>No comments yet</p>
              )}
            </div>
          ))}
        </div>
        <button onClick={() => changePage("dashboard")} className={styles.backButton}>Back to Dashboard</button>
      </div>
    </div>
  );
};

export default CommunityPage;
