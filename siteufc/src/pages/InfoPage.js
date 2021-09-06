import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const InfoPage = () => {
    return (
        <div className='info'>
            <Navigation />
            <section>
                <div>
                    <img src='' alt='img-1'></img>
                    <img src='' alt='img-2'></img>
                </div>
                <div>
                    <p>
                        L'Ultimate Fighting Championship ou UFC est une organisation sportive américaine d'arts martiaux mixtes (MMA), créée en novembre 1993.
                    </p>
                    <p>
                        Résultat de recherche d'images pour "ufc"
                        Elle a pour but de confronter des combattants issus de tout type d'arts martiaux pour combattre les uns contre les autres dans des règles libres, mais très vite des règles sont fixées pour la sécurité des combattants.
                    </p>
                    <p>
                        De nos jours, malgré une création très récente, L'UFC attirent jusqu'à plus de 56 000 spectateurs en 2015 pour un seul combat montrant l'attraction fulgurante du nombre de spectateurs qui a était multiplié par 20 en 20 ans.<br/> 

                        De plus, l'UFC se mondialise avec l'organisation d'événements, en 2017, au Brésil ou au Japon par exemple. 
                        Ce qui caractérise l'UFC c'est la cage ( en forme d'octogone).
                    </p>
                    <p>
                        Résultat de recherche d'images pour "cage de ufc" Elle entoure les combattants laissant une aux combattants une très petite zone de combat, ceci favorise les combats debout car les combattants peuvent utiliser la cage pour se battre.
                        Ce site souhaite résumer l'histoire de ce sport et expliquer comment il a pu devenir aussi célèbre en si peu de temps, il a était créé dans le cadre de l'Outil informatique à l'Université Champollion d'Albi.
                    </p>
                </div>
            </section>
            <Footer />
  );
};

export default InfoPage;
