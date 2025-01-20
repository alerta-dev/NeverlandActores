import React from 'react';
import { Disc as Discord, Youtube, MessageCircle } from 'lucide-react';

// Sample data - you can replace this with your actual data
const users = [
  {
    id: 1,
    name: "Ōkami Dub",
    image: "https://64.media.tumblr.com/285fa9cf0b2ea9801f1e8b9b3a78e9b3/b1bdbc95ae1b5b59-5e/s540x810/a6a4985939173aefdd6fcefb3d03d1ca2a36dd18.pnj",
    description: "Doblaje profesional con 5 años de experiencia. Especializada en voces juveniles y personajes animados.",
    social: {
      discord: "anagarcia#1234",
      youtube: "@okamidub118",
      tiktok: "@ana.doblajes"
    }
  },
  {
    id: 2,
    name: "Blest",
    image: "https://64.media.tumblr.com/8cfed5c35268dd094701cc6f0dfc850a/6ee9b10ccda0607b-e2/s1280x1920/3a07e435fbd67f60ddf45556208ed4effb20eec0.pnj",
    description: "Actor de voz versátil con experiencia en videojuegos y documentales. Narrador apasionado.",
    social: {
      discord: "carlosmendoza#5678",
      youtube: "https://www.youtube.com/@Blest999",
      tiktok: "@carlosvoiceactor"
    }
  },
  {
    id: 3,
    name: "Laura Torres",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    description: "Especialista en doblaje de anime y series. Voz característica y adaptable a múltiples personajes.",
    social: {
      discord: "lauratorres#9012",
      youtube: "LauraDoblaje",
      tiktok: "@laura.doblajes"
    }
  }
];

function UserCard({ user }: { user: typeof users[0] }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex gap-8 w-full max-w-3xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <img
        src={user.image}
        alt={user.name}
        className="w-40 h-40 rounded-xl object-cover shadow-md"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{user.name}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{user.description}</p>
        </div>
        <div className="flex gap-6 mt-6">
          <a 
            href={`https://discord.com/users/${user.social.discord}`} 
            className="text-gray-600 hover:text-indigo-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Discord className="w-6 h-6" />
          </a>
          <a 
            href={`https://youtube.com/${user.social.youtube}`} 
            className="text-gray-600 hover:text-red-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a 
            href={`https://tiktok.com/${user.social.tiktok}`} 
            className="text-gray-600 hover:text-black transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-16">
          Nuestro Equipo de Trabajo
        </h1>
        <div className="flex flex-col items-center gap-8">
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
