import React from 'react';
import Card from './Card'; // veya Card component'ini içe aktar
import kahvalti from "../assets/kahvalti.jpg" 
import './CardSections.css'
import { useNavigate } from "react-router-dom";
import imgs from "../assets/homepage.jpg"
const CardSections = () => {
  const navigate = useNavigate();
  const cards = [
    {
      image: kahvalti,
      title: 'Sahan ve Omlet Severler',
      description: 'En lezzetli sandviçleri sizlerle paylaşıyoruz…',
      link: '/sahan-omlet'
    },
    {
      image: kahvalti,
      title: 'Bi Dünya Atıştırmalık',
      description: 'En iyi atıştırmalık ürünleri sizler için…',
      link: '/bir-dunya-atistirmalik'
    },
    {
      image: kahvalti,
      title: 'Sokak Lezzetleri',
      description: 'Sokak lokantalarından en lezzetli yemekleri sizlerle…',
      link: '/sokak-lezzetleri'
    },
    {
      image: kahvalti,
      title: 'Tostlar',
      description: 'En kaliteli tostları sizlerle paylaşıyoruz…',
      link: '/tostlar'
    },{
      image: kahvalti,
      title: 'Sahan ve Omlet Severler',
      description: 'En lezzetli sandviçleri sizlerle paylaşıyoruz…',
      link: '/sahan-omlet'
    },
    {
      image: kahvalti,
      title: 'Bi Dünya Atıştırmalık',
      description: 'En iyi atıştırmalık ürünleri sizler için…',
      link: '/bir-dunya-atistirmalik'
    },
    {
      image: kahvalti,
      title: 'Sokak Lezzetleri',
      description: 'Sokak lokantalarından en lezzetli yemekleri sizlerle…',
      link: '/sokak-lezzetleri'
    },
    {
      image: kahvalti,
      title: 'Tostlar',
      description: 'En kaliteli tostları sizlerle paylaşıyoruz…',
      link: '/tostlar'
    },{
      image: kahvalti,
      title: 'Sahan ve Omlet Severler',
      description: 'En lezzetli sandviçleri sizlerle paylaşıyoruz…',
      link: '/sahan-omlet'
    },
    {
      image: kahvalti,
      title: 'Bi Dünya Atıştırmalık',
      description: 'En iyi atıştırmalık ürünleri sizler için…',
      link: '/bir-dunya-atistirmalik'
    },
    {
      image: kahvalti,
      title: 'Sokak Lezzetleri',
      description: 'Sokak lokantalarından en lezzetli yemekleri sizlerle…',
      link: '/sokak-lezzetleri'
    },
    {
      image: kahvalti,
      title: 'Tostlar',
      description: 'En kaliteli tostları sizlerle paylaşıyoruz…',
      link: '/tostlar'
    },{
      image: kahvalti,
      title: 'Sahan ve Omlet Severler',
      description: 'En lezzetli sandviçleri sizlerle paylaşıyoruz…',
      link: '/sahan-omlet'
    },
    {
      image: kahvalti,
      title: 'Bi Dünya Atıştırmalık',
      description: 'En iyi atıştırmalık ürünleri sizler için…',
      link: '/bir-dunya-atistirmalik'
    },
    {
      image: kahvalti,
      title: 'Sokak Lezzetleri',
      description: 'Sokak lokantalarından en lezzetli yemekleri sizlerle…',
      link: '/sokak-lezzetleri'
    },
    {
      image: kahvalti,
      title: 'Tostlar',
      description: 'En kaliteli tostları sizlerle paylaşıyoruz…',
      link: '/tostlar'
    }
  ];
  
  const handleClick = (link) => {
    navigate(link);
  };
  const filteredCards = cards.map(card => ({
    ...card,
    link: `/choice-list${card.link}`
  }));

  return (
    <div className="card-container">
      <div>
          <img className="home-image" src={imgs}></img>
      </div>
      <div>
        <h3 className='card-section-name'>BÖLÜMLER</h3>
      </div>
      <div className="bol-cards">
        {filteredCards.map((card, index) => (
          <Card key={index} {...card} onClick={() => handleClick(card.link)}/>
        ))}
      </div>
      
    </div>
  );
};

export default CardSections;
