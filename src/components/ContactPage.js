import React from 'react';
import Form from './Form';

const ContactPage = () => {
    return (
        <div className='contact-page'>
            <div className='container'>
                <h1>Contactez-nous !</h1>
                <div className='contact-page--content'>
                    <p>
                        Bienvenue sur notre page de contact dédiée aux passionnés de l'huile d'argan authentique ! Nous sommes ravis de répondre à toutes vos questions et de vous fournir des informations détaillées sur nos produits de haute qualité. Que vous soyez intéressé par des commandes en gros, des renseignements sur nos différentes gammes d'huiles, ou des détails spécifiques sur nos procédés de production, notre équipe est là pour vous guider. Remplissez le formulaire ci-dessous avec vos coordonnées et vos demandes, et nous vous contacterons dans les plus brefs délais pour discuter de vos besoins en matière d'huiles d'argan.
                    </p>
                    <p>
                        Chez Shop Atlas, la satisfaction de nos clients est notre priorité absolue. Nous sommes fiers de proposer des huiles d'argan pures et naturelles, directement issues des coopératives au cœur du Maroc. Chaque produit que nous offrons est le fruit d'un savoir-faire artisanal et d'une passion inébranlable pour la qualité. Que vous soyez une entreprise recherchant des produits uniques pour votre clientèle ou un particulier souhaitant découvrir les bienfaits de l'huile d'argan, nous sommes là pour vous accompagner dans votre démarche. Remplissez le formulaire ci-dessous, et laissez-nous vous guider vers l'expérience de l'huile d'argan la plus authentique et raffinée.
                    </p>
                </div>
                <Form />
            </div>
        </div>
    );
};

export default ContactPage;