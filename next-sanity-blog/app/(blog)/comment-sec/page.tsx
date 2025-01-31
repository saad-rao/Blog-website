"use client"
import React, { useState, useEffect } from 'react';

const CommentSec = () => {
  const [comments, setComments] = useState<{ username: string, comment: string }[]>([]);
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to localStorage whenever the comments state changes
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }, [comments]);

  const handleAddComment = () => {
    if (username && comment) {
      const newComment = { username, comment };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setUsername('');
      setComment('');
    }
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl p-8 bg-white shadow-2xl rounded-2xl border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Share Your Thoughts
        </h2>
        
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl 
                     text-gray-700 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     transition-all duration-300 ease-in-out
                     hover:bg-gray-100"
          />
        </div>
        
        <div className="mb-6">
          <textarea
            placeholder="Write your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl 
                     text-gray-700 placeholder-gray-400 resize-none
                     focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     transition-all duration-300 ease-in-out
                     hover:bg-gray-100"
          />
        </div>
        
        <button
          onClick={handleAddComment}
          className="w-full py-4 px-6 bg-purple-600 text-white font-semibold rounded-xl
                   transform transition-all duration-300 ease-in-out
                   hover:bg-purple-700 hover:shadow-lg hover:-translate-y-0.5
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Post Comment
        </button>
      </div>

      <div className="w-full max-w-2xl mt-12">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Discussion
        </h3>
        <div className="space-y-6">
          {comments.map((commentData, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg border border-gray-100
                       transform transition-all duration-300 ease-in-out
                       hover:shadow-xl hover:-translate-y-1"
              style={{ animation: 'fadeIn 0.5s ease-in-out' }}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">
                      {commentData.username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <p className="font-semibold text-gray-800">
                    {commentData.username}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteComment(index)}
                  className="px-4 py-2 text-sm font-medium text-red-500 rounded-lg
                           transition-colors duration-300 ease-in-out
                           hover:bg-red-50 hover:text-red-600"
                >
                  Delete
                </button>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {commentData.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentSec;