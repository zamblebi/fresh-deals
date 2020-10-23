import React, { useState } from 'react'
import './Intro.css'
import {Link} from 'react-router-dom'
import Carousel from './Carousel/Courasel'
const Intro = () => {
    return (
        <div className="intro">
            <div>
                <Carousel/>
                <h2>Site d'annonce gratuit dans le monde</h2>
                <h4>Choisir une ville</h4>
                <ul className="intro_town">
                    <div>
                        <li>Abidjan</li>
                        <li>Daloa</li>
                        <li>Zuenoula</li>
                    </div>
                    <div>
                        <li>Man</li>
                        <li>Bingerville</li>
                        <li>Seguela</li>
                    </div>
                </ul>
                <Link to="/post_article">Publiez votre annonce gratuitement</Link>
            </div>
            <div>
                <ul className="offer_presentation">
                    <li>Vendez tout GRATUITEMENT !</li>
                    <li>Des centaines d'acheteur chaque jour</li>
                    <li>Ajoutez des images pour vendre plus vite !</li>
                    <li> Voir toutes les annonces en Cote D'Ivoire</li>
                </ul>
            </div>
        </div>
    )
}

export default Intro