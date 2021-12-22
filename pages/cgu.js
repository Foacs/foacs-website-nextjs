import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Heading1 from "../components/heading1";
import Container from "../components/container";

export default function Cgu() {
  return (
    <>
      <Head>
        <title>Foacs - CGU</title>
      </Head>
      <Layout>
        <Heading1>Conditions Générales d&apos;Utilisation</Heading1>
        <Container>
          <section className="container mx-auto p-4 border shadow-md max-w-screen-lg">
            <h2
              className="text-2xl font-bold"
              id="conditions-g-n-rales-d-utilisation-foacs"
            >
              Conditions Générales d&#39;Utilisation Foacs
            </h2>
            <small className="text-gray-700 dark:text-gray-300 my-8">
              Mis à jour: <time>22 décembre 2021</time>
            </small>
            <p className="mb-1">
              Conditions Générales d&#39;Utilisation du site web Foacs.
            </p>
            <p className="mb-1">
              Veuillez lire attentivement les présentes conditions
              d&#39;Utilisation.
            </p>
            <p className="mb-1">
              Les présentes conditions d&#39;utilisation
              (&quot;Conditions&quot;) régissent l&#39;accès au site web de
              Foacs (&quot;Site web&quot;) et constituent le contrat entre Foacs
              et l&#39;Utilisateur. L&#39;accès au Site web de Foacs signifie
              l&#39;acceptation des présentes Conditions.
            </p>
            <hr />
            <h3 className="text-xl font-medium my-2" id="1-mentions-l-gales">
              1. Mentions légales
            </h3>
            <p className="mb-1">
              Le site web de Foacs est mis à disposition par l&#39;association
              &#34;de fait&#34; Foacs.
            </p>
            <p className="mb-1">
              L&#39;hébergement du site web est assuré par la société OUIHEBERG
              SARL, sise au 22 rue du muscat - 30470 AIMARGUES - France.
            </p>
            <hr />
            <h3
              className="text-xl font-medium my-2"
              id="2-inscription-des-utilisateurs"
            >
              2. Inscription des Utilisateurs
            </h3>
            <p className="mb-1">
              L&#39;Utilisateur peut créer un compte individuel avec mot de
              passe dans les modalités définies au{" "}
              <Link href="#8-donn-es-personnelles">
                <a>point 8</a>
              </Link>
              . Ce compte permet notamment à l&#39;utilisateur de renseigner un
              profil public et d&#39;indiquer sa contribution aux projets de
              Foacs.
            </p>
            <p className="mb-1">
              Foacs se réserve le droit de suspendre ou résilier le compte
              d&#39;un Utilisateur en cas d&#39;utilisation frauduleuse ou
              contraire aux présentes conditions d&#39;utilisation.
            </p>
            <hr />
            <h3
              className="text-xl font-medium my-2"
              id="3-suppression-de-compte-utilisateur"
            >
              3. Suppression de compte Utilisateur
            </h3>
            <p className="mb-1">
              L&#39;Utilisateur peut demander la suppression de son compte
              Utilisateur via le{" "}
              <Link href="/contact">
                <a>formulaire de contact</a>
              </Link>
              . Cette suppression est effective à compter de l&#39;envoi à
              l&#39;Utilisateur d&#39;une confirmation de suppression de son
              compte Utilisateur. Elle entraîne la suppression de toutes les
              données associées au compte Utilisateur.
            </p>
            <hr />
            <h3
              className="text-xl font-medium my-2"
              id="4-conditions-d-utilisation"
            >
              4. Conditions d&#39;utilisation
            </h3>
            <p className="mb-1">
              L&#39;Utilisateur est réputé avoir pris connaissance des présentes
              Conditions. L&#39;Utilisateur garantit qu&#39;il n&#39;utilisera
              pas le site web à des fins illicites ou immorales ou contraires à
              leur utilisation initiale.
            </p>
            <p className="mb-1">
              Conformément à la loi, l&#39;Utilisateur s&#39;engage à ne pas
              partager et/ou publier, par tout moyen, tout contenu (textes,
              propos, images) ayant, entre autres, un caractère agressif,
              malveillant, diffamatoire, pornographique, raciste, xénophobe ou
              incitant à la haine. L&#39;Utilisateur garantit que les
              informations postées sur le site web ne violent pas les droits de
              tiers et sont conformes à toutes les lois applicables.
            </p>
            <hr />
            <h3 className="text-xl font-medium my-2" id="5-logiciels-utilis-s">
              5. Logiciels utilisés
            </h3>
            <p className="mb-1">
              Le site web utilise <a href="https://nextjs.org">Next.js</a> sous
              licence open source MIT, et est lui-même sous licence open source{" "}
              <a href="http://cecill.info/licences/Licence_CeCILL_V2.1-fr.html">
                CeCILL
              </a>
              . Le code source du site web est disponible sur{" "}
              <a href="https://github.com/Foacs/foacs-website">GitHub</a>.
            </p>
            <hr />
            <h3 className="text-xl font-medium  my-2" id="6-liens-hypertextes">
              6. Liens hypertextes
            </h3>
            <p className="mb-1">
              Tout site public ou privé est autorisé à établir, sans
              autorisation préalable, un lien (y compris profond) vers les
              informations diffusées par le site web.
            </p>
            <p className="mb-1">
              De nombreux liens vers d&#39;autres sites, privés ou officiels,
              français ou étrangers, sont proposés. Leur présence ne saurait
              engager Foacs quant à leur contenue et ne vise qu&#39;à permettre
              à l&#39;internaute de trouver plus facilement d&#39;autres
              ressources documentaires sur le sujet consulté.
            </p>
            <h3 className="text-xl font-medium my-2" id="7-responsabilit-">
              7. Responsabilité
            </h3>
            <p className="mb-1">
              Foacs met tout en oeuvre pour offrir aux Utilisateurs des
              informations et/ou des outils disponibles et mis à jour. Pour
              autant, elle ne saurait être tenue pour responsable en cas
              d&#39;erreurs, d&#39;absence de disponibilité des fonctionnalités
              et/ou de la présence de virus sur le site web.
            </p>
            <p className="mb-1">
              Foacs ne saurait garantir l&#39;exactitude, la complétude,
              l&#39;actualité et l&#39;exhaustivité des informations diffusées
              sur le site web. Chaque Utilisateur contribuant au contenu
              s&#39;engage à vérifier la véracité des informations obtenues
              auprès des personnes concernées. Foacs ne saurait être engagée en
              cas de force majeure.
            </p>
            <hr />
            <h3
              className="text-xl font-medium  my-2"
              id="8-donn-es-personnelles"
            >
              8. Données personnelles
            </h3>
            <p className="mb-1">
              Foacs est susceptible de recueillir, conserver et utiliser les
              informations concernant les Utilisateurs, leurs activités sur le
              site web et/ou leurs informations de connexion.
            </p>
            <h4 className="text-lg  my-2" id="8-1-traitement-des-donn-es">
              8.1 Traitement des données
            </h4>
            <p className="mb-1">
              Finalité: le traitement a pour objet la gestion des Utilisateurs
              du Site. Il permet à Foacs:
            </p>
            <ul className="list-disc ml-10">
              <li>
                de permettre à l&#39;Utilisateur de renseigner un profil public;
              </li>
              <li>
                de permettre à l&#39;Utilisateur d&#39;indiqué sa contribution
                aux projets de Foacs;
              </li>
            </ul>
            <p className="mb-1">Catégories des données traitées:</p>
            <ul className="list-disc ml-10">
              <li>données d&#39;identifications;</li>
              <li>coordonnées de contact;</li>
              <li>
                données de connexion au compte (adresses IP, noms
                d&#39;utilisateurs);
              </li>
            </ul>
            <p className="mb-1">
              Base légale du traitement : le e) du 1. de l’article 6 du
              Règlement Général sur la Protection des Données – RGPD (traitement
              nécessaire à l&#39;exécution d&#39;une mission d&#39;intérêt
              public ou relevant de l&#39;exercice de l&#39;autorité publique
              dont est investi le responsable de traitement).
            </p>
            <p className="mb-1">
              Source des données : ces informations sont recueillies auprès des
              Utilisateurs lors de leur inscription et de l’utilisation du Site.
            </p>
            <p className="mb-1">
              Prise de décision automatisée : le traitement ne prévoit pas de
              prise de décision automatisée.
            </p>
            <p className="mb-1">
              Personnes concernées : le traitement de données concerne les
              personnes qui créent un compte sur le Site.
            </p>
            <p className="mb-1">
              Destinataire des données : Foacs est l&#39;unique destinataire de
              tout ou partie des données.
            </p>
            <p className="mb-1">
              Transferts des données hors Union Européenne : aucun transfert de
              données hors de l&#39;Union européenne n&#39;est réalisé.
            </p>
            <p className="mb-1">
              Durée de conservation des données d’inscription : les données sont
              conservées en base active jusqu’à 3 ans après la clôture du compte
              utilisateur.
            </p>
            <h4 className="text-lg  my-2" id="8-2-cookies">
              8.2 Cookies
            </h4>
            <p className="mb-1">
              Un « cookie » est un fichier de taille limitée, généralement
              constitué de lettres et de chiffres, envoyé par le serveur
              internet au fichier cookie du navigateur situé sur le disque dur
              de votre ordinateur. Il a pour but de collecter des informations
              relatives à la navigation de l’Utilisateur et de lui dresser des
              services adaptés à son terminal (ordinateur, mobile ou tablette).
            </p>
            <hr />
            <h3
              className="text-xl font-medium my-2"
              id="modifications-mises-jour"
            >
              Modifications - Mises à jour
            </h3>
            <p className="mb-1">
              Foacs peut être amenée à effectuer des modifications et/ou mises à
              jour susceptible d&#39;affecter le site web pour des raisons liées
              notamment à des évolutions techniques et/ou juridiques.
            </p>
            <hr />
            <h3
              className="text-xl font-medium my-2"
              id="droit-applicable-et-litiges"
            >
              Droit applicable et litiges
            </h3>
            <p className="mb-1">
              Les présentes Conditions sont soumises au droit français. Pour
              toute réclamation relative à l’utilisation et à l’acceptation,
              l’exécution ou l’interprétation des Conditions générales
              d’utilisation du Site, les Utilisateurs peuvent saisir Foacs :
            </p>
            <p className="mb-1">
              via le formulaire de contact à l&#39;adresse suivante :{" "}
              <a href="https://foacs.ovh/contact">https://foacs.ovh/contact</a>{" "}
              ;
            </p>
            <p className="mb-1">
              En cas de non résolution du litige à l&#39;amiable, les Parties
              soumettront ledit litige à l&#39;appréciation des tribunaux
              français compétents.
            </p>
            <small className="text-gray-700 dark:text-gray-300 mt-5">
              Publié le <time>01/03/2021 </time> - Mis à jour le{" "}
              <time>18/12/2021</time>
            </small>
          </section>
        </Container>
      </Layout>
    </>
  );
}
