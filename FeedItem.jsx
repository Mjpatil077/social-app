import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const FeedItem = ({ username, content, likes, comments, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <div className="flex items-center mb-2">
      <img 
        src={`https://api.dicebear.com/6.x/initials/svg?seed=${username}`} 
        alt={username} 
        className="w-10 h-10 rounded-full mr-2" 
      />
      <span className="font-semibold text-gray-800">{username}</span>
    </div>
    <p className="text-gray-600 mb-4">{content}</p>
    {imageUrl && (
      <img 
        src={imageUrl} 
        alt="Post content" 
        className="w-full h-64 object-cover rounded-md mb-4" 
      />
    )}
    <div className="flex justify-between text-gray-500">
      <button className="flex items-center">
        <Heart className="w-5 h-5 mr-1" />
        {likes}
      </button>
      <button className="flex items-center">
        <MessageCircle className="w-5 h-5 mr-1" />
        {comments}
      </button>
      <button className="flex items-center">
        <Share2 className="w-5 h-5 mr-1" />
        Share
      </button>
    </div>
  </div>
);

export default FeedItem;