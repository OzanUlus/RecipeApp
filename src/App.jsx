import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import Home from './components/Home/Home'
import { RecipeList } from './components/RecipeList/RecipeList'

function App() {
 
  const recipes = [
    {
        id: 1,
        name: 'Spagetti',
        imageUrl: 'https://via.placeholder.com/300?text=Spaghetti',
        description: 'Lezzetli bir İtalyan klasiği olan spagetti, domates sosu ve parmesan peyniri ile servis edilir.'
    },
    {
        id: 2,
        name: 'Tacos',
        imageUrl: 'https://via.placeholder.com/300?text=Tacos',
        description: 'Meksika mutfağının vazgeçilmezi, taze sebzeler ve et ile doldurulmuş lezzetli tacos.'
    },
    {
        id: 3,
        name: 'Sushi',
        imageUrl: 'https://via.placeholder.com/300?text=Sushi',
        description: 'Japon mutfağının baş tacı olan sushi, pirinç, deniz ürünleri ve sebzeler ile hazırlanan bir lezzet.'
    },
    {
        id: 4,
        name: 'Pizza',
        imageUrl: 'https://via.placeholder.com/300?text=Pizza',
        description: 'İtalyan usulü pizza, ince hamur üzerinde taze malzemelerle hazırlanmış mükemmel bir seçenek.'
    },
    {
        id: 5,
        name: 'Hamburger',
        imageUrl: 'https://via.placeholder.com/300?text=Hamburger',
        description: 'Klasik hamburger, sulu et köftesi ve taze sebzelerle hazırlanan bir fast food klasiği.'
    },
    {
        id: 6,
        name: 'Salata',
        imageUrl: 'https://via.placeholder.com/300?text=Salad',
        description: 'Renkli ve sağlıklı bir salata, taze sebzeler ve zeytinyağı sosu ile servis edilir.'
    },
    {
        id: 7,
        name: 'Biftek',
        imageUrl: 'https://via.placeholder.com/300?text=Steak',
        description: 'Mükemmel pişirilmiş biftek, patates püresi ve yeşil sebzeler ile sunulan bir akşam yemeği seçeneği.'
    },
    {
        id: 8,
        name: 'Pad Thai',
        imageUrl: 'https://via.placeholder.com/300?text=Pad+Thai',
        description: 'Tayland mutfağının vazgeçilmezi olan Pad Thai, pirinç eriştesi ve karides ile hazırlanır.'
    },
    {
        id: 9,
        name: 'Ramen',
        imageUrl: 'https://via.placeholder.com/300?text=Ramen',
        description: 'Lezzetli bir ramen çorbası, zengin et suyu ve taze sebzeler ile birlikte servis edilir.'
    },
    {
        id: 10,
        name: 'Paella',
        imageUrl: 'https://via.placeholder.com/300?text=Paella',
        description: 'İspanyol mutfağının vazgeçilmezi olan Paella, deniz ürünleri ve safranlı pirinç ile hazırlanan bir yemektir.'
    },
    {
        id: 11,
        name: 'Dumplings',
        imageUrl: 'https://via.placeholder.com/300?text=Dumplings',
        description: 'Çin mutfağının en bilinen yemeklerinden biri olan dumplings, çeşitli iç harçlarla doldurulur.'
    },
    {
        id: 12,
        name: 'Ceviche',
        imageUrl: 'https://via.placeholder.com/300?text=Ceviche',
        description: 'Limon suyu ile marine edilmiş deniz ürünleri ve sebzelerden oluşan, Güney Amerika’ya özgü bir lezzet.'
    },
    {
        id: 13,
        name: 'Istakoz',
        imageUrl: 'https://via.placeholder.com/300?text=Lobster',
        description: 'Lüks bir yemek seçeneği olan ıstakoz, tereyağı sosu ile servis edilir ve özel günler için idealdir.'
    },
    {
        id: 14,
        name: 'Chow Mein',
        imageUrl: 'https://via.placeholder.com/300?text=Chow+Mein',
        description: 'Çin usulü kızartılmış erişte, taze sebzeler ve tavuk ile hazırlanan lezzetli bir yemek.'
    },
    {
        id: 15,
        name: 'Krep',
        imageUrl: 'https://via.placeholder.com/300?text=Crepes',
        description: 'Fransız mutfağının ünlü tatlısı olan krep, çikolata sosu ve meyve ile servis edilir.'
    },
    {
        id: 16,
        name: 'Musakka',
        imageUrl: 'https://via.placeholder.com/300?text=Moussaka',
        description: 'Yunan mutfağının klasiklerinden biri olan musakka, patlıcan ve kıyma ile hazırlanır.'
    }
];


  return (
    <>
      <Header />
      <Home />
      <RecipeList recipes={recipes} />
    </>
  )
}

export default App
