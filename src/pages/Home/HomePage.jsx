import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";

import Sidebar,{ SidebarItem } from '../../components/Sidebar/Sidebar.jsx'





const FeedItem = ({ username, content, likes, comments, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <div className="flex items-center mb-2">
      <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${username}`} alt={username} className="w-10 h-10 rounded-full mr-2" />
      <span className="font-semibold text-gray-800">{username}</span>
    </div>
    <p className="text-gray-600 mb-4">{content}</p>
    {imageUrl && (
      <img src={imageUrl} alt="Post content" className="w-full h-64 object-cover rounded-md mb-4" />
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

const HomePage = () => {
  const feedItems = [
    { username: 'reeshi_the_rishi', content: 'Just finished a great workout!', likes: 15, comments: 3, imageUrl: 'https://source.unsplash.com/random/800x600?fitness' },
    { username: 'mayur_bhai#thala_fan7', content: 'Check out this amazing sunset I captured today!', likes: 42, comments: 7, imageUrl: 'https://source.unsplash.com/random/800x600?sunset' },
    { username: 'john_cena_official', content: 'Anyone have recommendations for a good book to read?', likes: 8, comments: 12, imageUrl: 'https://source.unsplash.com/random/800x600?books' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
           {
             <Sidebar>
             <SidebarItem icon={<Home size={20} />} text="Home" alert />
             <SidebarItem icon={<LayoutDashboard size={20} />} text="Explore" active />
             <SidebarItem icon={<StickyNote size={20} />} text="Notifications" alert />
             <SidebarItem icon={<Calendar size={20} />} text="Messages" />
             <SidebarItem icon={<Layers size={20} />} text="Bookmarks" />
             <SidebarItem icon={<Flag size={20} />} text="Analytics" />
             <hr className="my-3" />
             <SidebarItem icon={<Settings size={20} />} text="Settings" />
             <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
           </Sidebar>
        }
        <div className="max-w-2xl mx-auto pt-20 px-4">
          <h1 className="text-3xl font-bold text-black mb-6">My Feed</h1>
          {feedItems.map((item, index) => (
            <FeedItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;