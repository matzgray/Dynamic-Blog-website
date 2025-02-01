
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
      title: "The Beauty and Power of Nature",
      description: "Nature is the greatest masterpiece, crafted with precision and beauty beyond our imagination. From the vast oceans to the towering mountains, from lush forests to expansive deserts, nature is full of wonders that leave us in awe. Its landscapes change with the seasons, bringing new colors, sounds, and fragrances to our world. The sound of birds chirping at dawn, the rustling of leaves in the wind, and the waves crashing on the shore are simple yet profound reminders of nature beauty. Beyond its visual appeal, nature plays a crucial role in maintaining the balance of life on Earth. Forests purify the air, rivers provide fresh water, and the soil nourishes crops that sustain us. The interconnectedness of all living things in nature teaches us the importance of harmony and respect for the environment. Yet, in our busy lives, we often forget to pause and appreciate the natural world around us. Taking time to connect with nature, whether through a hike in the woods or a walk along the beach, rejuvenates our spirits and reminds us of the simple joys in life. Nature is not just a backdrop to our lives—it is the very essence of life itself, and it is our responsibility to protect it for future generations.",
      image: "/images/travel2.jpg",
    },
    3: {
      title: "The Ultimate Road Trip Guide",
      description: "Road trips offer the perfect mix of adventure, freedom, and unforgettable memories.Plan your route in advance, but leave room for spontaneous detours.Ensure your vehicle is road-trip ready—check the tires, oil, and brakes.Pack essentials like snacks, water, a first-aid kit, and a roadside emergency kit.Create a killer playlist or download podcasts to keep entertained on long drives.Use navigation apps like Google Maps or Waze, but carry a physical map as a backup.Take scenic routes to enjoy breathtaking landscapes and hidden gems.Stop at local diners, roadside attractions, and quirky landmarks for a unique experience.Follow the  rule—respect nature and clean up after yourself.Switch drivers if possible to avoid fatigue and stay refreshed.Capture moments with photos, but dont forget to enjoy the journey in real time.A great road trip is not just about the destination—its about the adventure along the way!",
      image: "/images/travel3.jpg",
    },
    4: {
      title: "Exploring the Beauty of Travel",
      description: "Traveling is a gateway to discovering new cultures, meeting people from diverse backgrounds, and experiencing breathtaking landscapes. Each trip offers a chance to break free from daily routines and immerse oneself in the beauty of the unknown. Whether you're hiking through the mountains, relaxing on a beach, or wandering the vibrant streets of a new city, travel opens up new horizons. The memories created during a journey often last a lifetime, inspiring new perspectives and deepening appreciation for the world around us. From savoring local cuisine to exploring hidden gems, each adventure brings its own unique story. Traveling not only rejuvenates the soul but also teaches valuable lessons in patience, adaptability, and resilience. The world is full of wonders waiting to be explored, and every journey is a step closer to understanding it better. So pack your bags and embark on an adventure that will change your life forever!",
      image: "/images/travel7.jpg",
    },
    
   5: {
      title: "The Serenity of River Traveling",
      description: "River traveling offers a unique and peaceful way to explore the world. As the boat gently glides through the water, you can take in the surrounding beauty in a way that no other mode of transport allows. The calmness of the river contrasts with the bustling life on land, offering a serene escape from the chaos of everyday life. Cruising down a river offers views of lush greenery, charming villages, and wildlife that you would otherwise miss. Whether it’s the majestic Nile, the winding Amazon, or the picturesque Danube, each river holds its own charm. Riverboats are not just a means of transportation, but a chance to live on the water and embrace the changing scenery. The rhythmic sound of the water lapping against the boat creates a soothing atmosphere, perfect for reflection and relaxation. River travel often includes stops at hidden towns, offering opportunities for exploration and culture. It’s an adventure that slows down time, allowing you to fully immerse in the experience. If you seek tranquility, a river journey is the perfect way to reconnect with nature and yourself.",
      image: "/images/travel8.jpg",
    },
    6: {
      title: "Budget Travel Guide: Exploring Thailand on a Budget",
      description: "Thailand is a paradise for budget travelers, offering affordable accommodations and food.Stay in hostels, guesthouses, or try couchsurfing to save money.Eat like a local at street food stalls for delicious and cheap meals.Use public transport, tuk-tuks, or rent a scooter for cost-effective travel.Visit free attractions like temples, beaches, and vibrant local markets.Explore national parks for a small entrance fee and enjoy stunning nature.Book overnight trains or buses to save on accommodation costs.Shop smart by bargaining at markets to get the best deals.Enjoy free cultural experiences like traditional festivals and temple ceremonies.Take advantage of happy hour deals for cheap drinks at beach bars.Stick to local experiences and avoid overpriced tourist traps.With careful planning, Thailand can be an affordable yet unforgettable destination.",
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
        <br />
        <center>
        <a
            href="/comments"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded "
          >
            Add Your Comments
          </a>
        </center>
      
      </div>
      
    </div>
  );
};

export default ProductDetails;