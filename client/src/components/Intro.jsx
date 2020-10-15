import React, { useState } from 'react'

const Intro = () => {
    return (
        <div className="Intro">
            <div>
                <h2>Site d'annonce gratuit dans le monde</h2>
                <h4>Choisir une ville</h4>
                <ul>
                    <li>Abidjan</li>
                    <li>Daloa</li>
                    <li>Zuenoula</li>

                    <li>Man</li>
                    <li>Bingerville</li>
                    <li>Seguela</li>
                </ul>
                <button>Publiez votre annonce gratuitement</button>
            </div>
            <div>
                <ul>
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