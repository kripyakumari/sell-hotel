const sampleListings = [
    {
      title: "Beachfront Paradise",
      description: "Step out of your door and onto the sandy beach with breathtaking ocean views.",
      image:
      "https://images.unsplash.com/photo-1453747063559-36695c8771bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 2000,
      location: "Miami, Florida",
      country: "USA"
    },
    {
      title: "Cozy Mountain Cabin",
      description: "A perfect retreat in the heart of nature, complete with a fireplace and hiking trails.",
      image:
      "https://plus.unsplash.com/premium_photo-1671358446946-8bd43ba08a6a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXRpZnVsJTIwcGxhY2VzfGVufDB8fDB8fHww",      
      price: 1500,
      location: "Aspen, Colorado",
      country: "USA"
    },
    {
      title: "Luxury Penthouse",
      description: "A high-rise penthouse with a rooftop pool and stunning skyline views.",
      image:
      "https://images.unsplash.com/photo-1592396355679-1e2a094e8bf1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwcGxhY2VzfGVufDB8fDB8fHww",
      price: 5000,
      location: "New York City, New York",
      country: "USA"
    },
    {
      title: "Countryside Farmhouse",
      description: "Escape the city with this charming farmhouse surrounded by green fields.",
      image:
      "https://images.unsplash.com/photo-1613402900762-25b427ea5d45?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdXRpZnVsJTIwcGxhY2VzfGVufDB8fDB8fHww",     
      price: 1200,
      location: "Alberta",
      country: "Canada"
    },
    {
      title: "Modern Studio Apartment",
      description: "Fully furnished studio in the heart of downtown with easy access to public transport.",
      image:
      "https://images.unsplash.com/photo-1595521624992-48a59aef95e3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXRpZnVsJTIwcGxhY2VzfGVufDB8fDB8fHww",
      price: 1800,
      location: "Toronto, Ontario",
      country: "Canada"
    },
    {
      title: "Traditional Japanese Ryokan",
      description: "Experience authentic Japanese hospitality in this traditional wooden inn.",
      image:
      "https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwaG91c2VzfGVufDB8fDB8fHww",
      price: 2200,
      location: "Kyoto",
      country: "Japan"
    },
    {
      title: "Ski Resort Chalet",
      description: "A warm and cozy wooden chalet right next to the ski slopes.",
      image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2VzfGVufDB8fDB8fHww",
      price: 2500,
      location: "Zermatt",
      country: "Switzerland"
    },
    {
      title: "Beach House Getaway",
      description: "A modern beachfront property with panoramic sea views.",
      image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwaG91c2VzfGVufDB8fDB8fHww",
      price: 3000,
      location: "Sydney",
      country: "Australia"
    },
    {
      title: "Bohemian Artist Loft",
      description: "A spacious, creative loft with high ceilings and artistic decor.",
      image:
      "https://plus.unsplash.com/premium_photo-1682377521715-95d16dc51943?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsJTIwaG91c2VzfGVufDB8fDB8fHww",
      price: 2100,
      location: "Berlin",
      country: "Germany"
    },
    {
      title: "Lakefront Cabin",
      description: "A peaceful lakeside retreat perfect for fishing and kayaking.",
      image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXRpZnVsJTIwaG91c2VzfGVufDB8fDB8fHww",
      price: 1700,
      location: "Ontario",
      country: "Canada"
    },
    {
      title: "Business-Class Apartment",
      description: "Stylish and modern apartment perfect for business travelers.",
      image:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 2400,
      location: "London",
      country: "UK"
    },
    {
      title: "Jungle Eco-Lodge",
      description: "Stay in a sustainable jungle cabin with nature all around.",
      image:
      "https://images.unsplash.com/photo-1565297032488-90722f09db62?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYXV0aWZ1bCUyMGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 1500,
      location: "Bali",
      country: "Indonesia"
    },
    {
      title: "Rooftop Loft",
      description: "A stylish loft with a private rooftop terrace overlooking the city.",
      image:
      "https://plus.unsplash.com/premium_photo-1686782502813-51579b55f6d8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJlYXV0aWZ1bCUyMGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 2700,
      location: "Paris",
      country: "France"
    },
    {
      title: "Secluded Island Villa",
      description: "A private luxury villa with direct access to the beach.",
      image:
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJlYXV0aWZ1bCUyMGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 4500,
      location: "Maldives",
      country: "Maldives"
    },
    {
      title: "Historic Townhouse",
      description: "A charming, well-preserved townhouse in the old town district.",
      image:
      "https://plus.unsplash.com/premium_photo-1724818361335-291394c25925?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJlYXV0aWZ1bCUyMGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 3200,
      location: "Prague",
      country: "Czech Republic"
    },
    {
      title: "Eco-Friendly Tiny Home",
      description: "A fully sustainable tiny home with solar power and rainwater harvesting.",
      image:
      "https://plus.unsplash.com/premium_photo-1724701624533-dea17ce5e61e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGJlYXV0aWZ1bCUyMGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 1300,
      location: "California",
      country: "USA"
    },
    {
      title: "Luxury Desert Retreat",
      description: "A peaceful escape in the middle of the desert with a private pool.",
      image:
      "https://images.unsplash.com/photo-1628625251827-77fa98fb34fa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGJlYXV0aWZ1bCUyMGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",

      price: 3800,
      location: "Dubai",
      country: "UAE"
    },
    {
      title: "Medieval Castle Stay",
      description: "Live like royalty in this beautifully restored medieval castle.",
      image:
      "https://images.unsplash.com/photo-1568092775154-7fa176a29c0f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGJlYXV0aWZ1bCUyMGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 6000,
      location: "Scotland",
      country: "UK"
    },
    {
      title: "Beachfront Bungalow",
      description: "A tropical bungalow just steps from the ocean.",
      image:
      "https://plus.unsplash.com/premium_photo-1724659217647-4bfdba75e5a6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGJlYXV0aWZ1bCUyMGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 2000,
      location: "Phuket",
      country: "Thailand"
    },
    {
      title: "Rustic Vineyard Cottage",
      description: "Enjoy wine country with this charming vineyard stay.",
      image:
      "https://plus.unsplash.com/premium_photo-1724659217618-b39cd5a30ac9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGJlYXV0aWZ1bCUyMGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 2500,
      location: "Tuscany",
      country: "Italy"
    },
    {
      title: "High-Tech Smart Home",
      description: "A fully automated home with voice-controlled features.",
      image:
      "https://plus.unsplash.com/premium_photo-1724818360373-ddf5fb281471?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxiZWF1dGlmdWwlMjBob3VzZXN8ZW58MHx8MHx8fDA%3D",
      price: 3500,
      location: "San Francisco",
      country: "USA"
    },
    {
      title: "Romantic Treehouse",
      description: "A unique getaway in a cozy treehouse surrounded by nature.",
      image:
      "https://plus.unsplash.com/premium_photo-1724701624563-a7bb454393c4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxiZWF1dGlmdWwlMjBob3VzZXN8ZW58MHx8MHx8fDA%3D",
      price: 1700,
      location: "Oregon",
      country: "USA"
    },
    {
      title: "Safari Lodge",
      description: "Stay in the heart of the savannah with wildlife all around.",
      image:
      "https://plus.unsplash.com/premium_photo-1724659217749-45e00f69106c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxiZWF1dGlmdWwlMjBob3VzZXN8ZW58MHx8MHx8fDA%3D",
      price: 4200,
      location: "Nairobi",
      country: "Kenya"
    },
    {
      title: "Ski-in/Ski-out Condo",
      description: "A modern condo with direct access to the slopes.",
      image:
      "https://plus.unsplash.com/premium_photo-1724659217738-cc0bdff06c7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY5fHxiZWF1dGlmdWwlMjBob3VzZXN8ZW58MHx8MHx8fDA%3D",
      price: 2800,
      location: "Aspen",
      country: "USA"
    },
    {
      title: "Mediterranean Villa",
      description: "A stunning white-washed villa overlooking the blue waters.",
      image:
      "https://images.unsplash.com/photo-1681133783494-3a3a05fdf53b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxiZWF1dGlmdWwlMjBob3VzZXN8ZW58MHx8MHx8fDA%3D",
      price: 4000,
      location: "Santorini",
      country: "Greece"
    },
    {
      title: "Houseboat Experience",
      description: "Stay on a floating houseboat with all modern amenities.",
      image:
      "https://images.unsplash.com/photo-1571245692302-0aa602fc33b4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE0fHxiZWF1dGlmdWwlMjBob3VzZXN8ZW58MHx8MHx8fDA%3D",
      price: 2200,
      location: "Amsterdam",
      country: "Netherlands",
    
    },
  ];
  
  module.exports = { data: sampleListings };
  