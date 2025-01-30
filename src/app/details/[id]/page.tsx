
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

const ProductDetails = () => {
  const { id } = useParams();

  const products = {
    1: {
      title: "Exploring the Beauty of Travel",
      description: "Traveling is a gateway to discovering new cultures, meeting people from diverse backgrounds, and experiencing breathtaking landscapes. Each trip offers a chance to break free from daily routines and immerse oneself in the beauty of the unknown. Whether you're hiking through the mountains, relaxing on a beach, or wandering the vibrant streets of a new city, travel opens up new horizons. The memories created during a journey often last a lifetime, inspiring new perspectives and deepening appreciation for the world around us. From savoring local cuisine to exploring hidden gems, each adventure brings its own unique story. Traveling not only rejuvenates the soul but also teaches valuable lessons in patience, adaptability, and resilience. The world is full of wonders waiting to be explored, and every journey is a step closer to understanding it better. So pack your bags and embark on an adventure that will change your life forever!",
      image: "/images/travel1.jpg",
    },
    2: {
      title: "/images/travel2.jpg",
      description: "River traveling offers a unique and peaceful way to explore the world. As the boat gently glides through the water, you can take in the surrounding beauty in a way that no other mode of transport allows. The calmness of the river contrasts with the bustling life on land, offering a serene escape from the chaos of everyday life. Cruising down a river offers views of lush greenery, charming villages, and wildlife that you would otherwise miss. Whether it’s the majestic Nile, the winding Amazon, or the picturesque Danube, each river holds its own charm. Riverboats are not just a means of transportation, but a chance to live on the water and embrace the changing scenery. The rhythmic sound of the water lapping against the boat creates a soothing atmosphere, perfect for reflection and relaxation. River travel often includes stops at hidden towns, offering opportunities for exploration and culture. It’s an adventure that slows down time, allowing you to fully immerse in the experience. If you seek tranquility, a river journey is the perfect way to reconnect with nature and yourself.",
      image: "/images/travel2.jpg.jpg",
    },
    3: {
      title: "Ways to Make Money in Today's World",
      description: "In today's fast-paced world, there are countless opportunities to make money, whether online or offline. The rise of the digital age has opened doors to multiple avenues, such as freelancing, online businesses, and content creation. Freelancing allows you to use your skills in writing, design, programming, and more, offering flexible working hours and global clients. Another popular way to earn is by starting an online store, where you can sell products or services with minimal investment. Investing in stocks or cryptocurrencies has also become a common way for individuals to grow their wealth, though it requires knowledge and caution. Additionally, sharing your knowledge through online courses or coaching can be a rewarding way to earn, while helping others. Many people also turn to affiliate marketing, earning commissions by promoting products from other brands. The key to success is consistency, creativity, and the willingness to learn new skills. With determination and the right approach, anyone can turn their passion into a profitable venture.",
      image: "/images/travel3.jpg",
    },
    4: {
      title: "Exploring the Beauty of Travel",
      description: "Traveling is a gateway to discovering new cultures, meeting people from diverse backgrounds, and experiencing breathtaking landscapes. Each trip offers a chance to break free from daily routines and immerse oneself in the beauty of the unknown. Whether you're hiking through the mountains, relaxing on a beach, or wandering the vibrant streets of a new city, travel opens up new horizons. The memories created during a journey often last a lifetime, inspiring new perspectives and deepening appreciation for the world around us. From savoring local cuisine to exploring hidden gems, each adventure brings its own unique story. Traveling not only rejuvenates the soul but also teaches valuable lessons in patience, adaptability, and resilience. The world is full of wonders waiting to be explored, and every journey is a step closer to understanding it better. So pack your bags and embark on an adventure that will change your life forever!",
      image: "/images/travel7.jpg",
    },
    5: {
      title: "The Beauty and Power of Nature",
      description: "Nature is the greatest masterpiece, crafted with precision and beauty beyond our imagination. From the vast oceans to the towering mountains, from lush forests to expansive deserts, nature is full of wonders that leave us in awe. Its landscapes change with the seasons, bringing new colors, sounds, and fragrances to our world. The sound of birds chirping at dawn, the rustling of leaves in the wind, and the waves crashing on the shore are simple yet profound reminders of nature's beauty. Beyond its visual appeal, nature plays a crucial role in maintaining the balance of life on Earth. Forests purify the air, rivers provide fresh water, and the soil nourishes crops that sustain us. The interconnectedness of all living things in nature teaches us the importance of harmony and respect for the environment. Yet, in our busy lives, we often forget to pause and appreciate the natural world around us. Taking time to connect with nature, whether through a hike in the woods or a walk along the beach, rejuvenates our spirits and reminds us of the simple joys in life. Nature is not just a backdrop to our lives—it is the very essence of life itself, and it is our responsibility to protect it for future generations.",
      image: "/images/travel8.jpg",
    },
    6: {
      title: "The Magnificent Burj Khalifa",
      description: "Standing tall in the heart of Dubai, Burj Khalifa is an architectural marvel that symbolizes the rapid growth and ambition of the UAE. At a staggering height of 828 meters, it is currently the tallest building in the world, outshining all its counterparts with its stunning design and advanced engineering. The skyscraper, designed by the renowned architect Adrian Smith, was completed in 2010 and has since become a global icon. Its sleek, modern design is inspired by the shape of a desert flower, blending elements of traditional Islamic architecture with futuristic aesthetics. The Burj Khalifa features 163 floors, including luxurious residences, offices, and the corporate suites of global giants. Visitors can experience breathtaking panoramic views of the city from the observation decks on the 124th and 148th floors, where the vast desert and the sparkling Arabian Gulf stretch out as far as the eye can see. Burj Khalifa is not just a building; it's a symbol of innovation, luxury, and Dubai's vision to push the boundaries of what's possible. It has become a must-visit attraction, drawing millions of tourists every year. Whether you're admiring it from the ground or standing on top of the world, the Burj Khalifa never fails to leave a lasting impression.",
      image: "/images/travel6.jpg",
    },
 
  };

  const product = products[id as unknown as keyof typeof products];

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen mt-20">
      <div className="bg-white p-6 rounded-2xl  max-w-lg">
        <Image
          src={product.image}
          alt={product.title}
          width={600}
          height={400}
          className="rounded-lg"
        />
        <h1 className="text-2xl font-bold mt-4 text-center">{product.title}</h1>
        <p className="mt-4 text-gray-700 text-center">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;