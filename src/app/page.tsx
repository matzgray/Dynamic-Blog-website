import Hero from '@/components/hero'
import React from "react";
import ProductCard from "../components/card";

const HomePage = () => {
  const products = [
    {
      id: "1",
      title: "Exploring the Beauty of Travel",
      description: "Traveling is a gateway to discovering new cultures,meeting people from diverse backgrounds, and experiencing breathtaking landscapes. Each trip offers a chance to break free from daily routines and immerse oneself in the beauty of the unknown. Whether you're hiking through the mountains, relaxing on a beach, or wandering the vibrant streets of a new city, travel opens up new horizons. The memories created during a journey often last a lifetime, inspiring new perspectives and deepening appreciation for the world around us. From savoring local cuisine to exploring hidden gems, each adventure brings its own unique story. Traveling not only rejuvenates the soul but also teaches valuable lessons in patience, adaptability, and resilience. The world is full of wonders waiting to be explored, and every journey is a step closer to understanding it better. So pack your bags and embark on an adventure that will change your life forever!.",
      image: "/images/travel1.jpg",
    },
    {
      id: "2",
      title: "The Serenity of River Traveling",
      description: "River traveling offers a unique and peaceful way to explore the world. As the boat gently glides through the water, you can take in the surrounding beauty in a way that no other mode of transport allows. The calmness of the river contrasts with the bustling life on land, offering a serene escape from the chaos of everyday life. Cruising down a river offers views of lush greenery, charming villages, and wildlife that you would otherwise miss. Whether it’s the majestic Nile, the winding Amazon, or the picturesque Danube, each river holds its own charm. Riverboats are not just a means of transportation, but a chance to live on the water and embrace the changing scenery. The rhythmic sound of the water lapping against the boat creates a soothing atmosphere, perfect for reflection and relaxation. River travel often includes stops at hidden towns, offering opportunities for exploration and culture. It’s an adventure that slows down time, allowing you to fully immerse in the experience. If you seek tranquility, a river journey is the perfect way to reconnect with nature and yourself.",
      image: "/images/travel2.jpg",
    },
    {
      id: "3",
      title: "Ways to Make Money ...",
      description: "In today's fast-paced world, there are countless opportunities to make money, whether online or offline. The rise of the digital age has opened doors to multiple avenues, such as freelancing, online businesses, and content creation. Freelancing allows you to use your skills in writing, design, programming, and more, offering flexible working hours and global clients. Another popular way to earn is by starting an online store, where you can sell products or services with minimal investment. Investing in stocks or cryptocurrencies has also become a common way for individuals to grow their wealth, though it requires knowledge and caution. Additionally, sharing your knowledge through online courses or coaching can be a rewarding way to earn, while helping others. Many people also turn to affiliate marketing, earning commissions by promoting products from other brands. The key to success is consistency, creativity, and the willingness to learn new skills. With determination and the right approach, anyone can turn their passion into a profitable venture.",
      image: "/images/travel3.jpg",
    },
    {
      id: "4",
      title: "Exploring the Beauty of Travel",
      description: "Traveling is a gateway to discovering new cultures,meeting people from diverse backgrounds, and experiencing breathtaking landscapes. Each trip offers a chance to break free from daily routines and immerse oneself in the beauty of the unknown. Whether you're hiking through the mountains, relaxing on a beach, or wandering the vibrant streets of a new city, travel opens up new horizons. The memories created during a journey often last a lifetime, inspiring new perspectives and deepening appreciation for the world around us. From savoring local cuisine to exploring hidden gems, each adventure brings its own unique story. Traveling not only rejuvenates the soul but also teaches valuable lessons in patience, adaptability, and resilience. The world is full of wonders waiting to be explored, and every journey is a step closer to understanding it better. So pack your bags and embark on an adventure that will change your life forever!.",
      image: "/images/travel7.jpg",
    },
    {
      id: "5",
      title: "The Beauty and Power of Nature",
      description: "Nature is the greatest masterpiece, crafted with precision and beauty beyond our imagination. From the vast oceans to the towering mountains, from lush forests to expansive deserts, nature is full of wonders that leave us in awe. Its landscapes change with the seasons, bringing new colors, sounds, and fragrances to our world. The sound of birds chirping at dawn, the rustling of leaves in the wind, and the waves crashing on the shore are simple yet profound reminders of nature's beauty. Beyond its visual appeal, nature plays a crucial role in maintaining the balance of life on Earth. Forests purify the air, rivers provide fresh water, and the soil nourishes crops that sustain us. The interconnectedness of all living things in nature teaches us the importance of harmony and respect for the environment. Yet, in our busy lives, we often forget to pause and appreciate the natural world around us. Taking time to connect with nature, whether through a hike in the woods or a walk along the beach, rejuvenates our spirits and reminds us of the simple joys in life. Nature is not just a backdrop to our lives—it is the very essence of life itself, and it is our responsibility to protect it for future generations.",
      image: "/images/travel8.jpg",
    },
    {
      id: "6",
      title: "The Magnificent Burj Khalifa",
      description: "In today's fast-paced world, there are countless opportunities to make money, whether online or offline. The rise of the digital age has opened doors to multiple avenues, such as freelancing, online businesses, and content creation. Freelancing allows you to use your skills in writing, design, programming, and more, offering flexible working hours and global clients. Another popular way to earn is by starting an online store, where you can sell products or services with minimal investment. Investing in stocks or cryptocurrencies has also become a common way for individuals to grow their wealth, though it requires knowledge and caution. Additionally, sharing your knowledge through online courses or coaching can be a rewarding way to earn, while helping others. Many people also turn to affiliate marketing, earning commissions by promoting products from other brands. The key to success is consistency, creativity, and the willingness to learn new skills. With determination and the right approach, anyone can turn their passion into a profitable venture.",
      image: "/images/travel6.jpg",
    },
   
  ];

  return (
    <div>
    <Hero />
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
    </div>
  );
};

export default HomePage;

