const BASE = import.meta.env.BASE_URL || '';

export const projects = [
  {
    id: 1,
    title: "Application Cerveau API Lodgify et TTLock",
    category: "Projet web",
    description: "Réalisé pendant mon stage de fin d'année, en Laravel",
    annee: "3ème année",
    image: `${BASE}/images/projects/Sync-Lock-Lodgify.png`,
   descriptionLong: "Développée durant mon stage au sein de l’agence Ça Comm'ence Aujourd'hui, cette application est un middleware conçu pour automatiser la gestion d'accès IoT pour des gîtes de location saisonnière. Écrit en PHP sous le framework Laravel, l'objectif était d'interconnecter de bout en bout deux plateformes tierces afin de supprimer toute intervention humaine dans la génération des codes d'accès. Bien que l'application fonctionne de manière autonome, j'ai développé un tableau de bord minimaliste permettant de suivre l'état des synchronisations, entièrement sécurisé par un système d'authentification Fortify.\n\nL'application s'appuie sur une architecture événementielle asynchrone. Dès qu'une réservation est créée ou modifiée sur Lodgify, un webhook transmet un payload JSON contenant les métadonnées du séjour comme les identifiants, les dates et les caractéristiques du gîte. Pour sécuriser ce canal, j'ai implémenté un middleware chargé de vérifier l'authenticity de la signature de chaque requête entrante. Une fois validées, les informations sont traitées par les contrôleurs. L'application calcule les périodes strictes de validité des accès, de 15h00 le jour de l'arrivée à 10h15 le jour du départ, selon les règles des propriétaires. Le script intègre aussi une condition d'accès global : si le logement nécessite le franchissement d'une entrée commune, le même code est répliqué sur la serrure principale pour la même plage horaire.\n\nLa phase finale du flux communique avec l'API REST de TTLock pour programmer les serrures via les gateways. Après confirmation de TTLock, l'application effectue une boucle de rétroaction vers Lodgify pour mettre à jour la réservation en injectant les codes d'accès dans les notes et dans la variable dédiée key_code. De plus, afin d'optimiser la mémoire et de garantir la sécurité du parc de serrures, j'ai configuré un Task Scheduler Laravel s'exécutant quotidiennement à minuit pour purger automatiquement les codes obsolètes en base de données et sur les terminaux physiques.\n\nEn ce qui concerne l'infrastructure, j'ai pris en charge l'intégralité du déploiement et de la mise en production. À partir d'un accès SSH sur un serveur Debian et d'un panneau d'administration ISPConfig où la base de données avait été initialisée, j'ai configuré l'environnement serveur, géré l'installation des dépendances via Composer, paramétré les variables d'environnement sécurisées et exécuté les migrations de la base de données",
   lienVideo: ""
  },
  {
    id: 2,
    title: "Application de gestion de tâche et sous-tâche",
    category: "Projet web",
    description: "Réalisé pendant mon stage de fin d'année, en full-stack TALL",
    annee: "3ème année",
    image: `${BASE}/images/projects/site-gestion-de-tache.png`,
    descriptionLong: "Développée seule en stage chez Ça Comm'ence Aujourd'hui, cette application en stack TALL (Tailwind, Alpine, Laravel, Livewire) est un outil de gestion de tâches sur mesure créé pour optimiser les processus internes de l'agence.\n\nLe système repose sur une modélisation Laravel complexe avec des Enums PHP pour suivre les états : en cours, validé, bat ok, en attente de bat et bloqué. En cas de blocage, une relation polymorphique (morph) associe un historique de motifs textuels aux grandes tâches, sous-tâches ou commentaires de prospects. Côté sécurité et structure, j'ai implémenté des Form Requests pour la validation et centralisé la logique dans les modèles via des Query Scopes. L'interface utilise Livewire pour la recherche et le filtrage dynamique sans rechargement, épaulé par Alpine.js pour les modales de chargement.\n\nL'application intègre l'API Evoliz : un bouton convertit les devis en grandes tâches à travers des formulaires séquentiels pré-remplis. Le système gère la création de clients à la volée et le suivi de facturation (à facturer, non payé, payé). Pour éviter de rater les urgences, j'ai créé un suivi d'assignations : une table comptabilise les créations et modifications de tâches liées à une assignation (hors changements d'états/motifs). Ce compteur s'affiche à côté du bouton (ex: Morgan : 3). Un Task Scheduler Laravel s'exécute chaque jour à 13h00 pour réinitialiser cette table.\n\nEnfin, j'ai intégré un back-office complet avec Filament PHP pour administrer les clients, prospects et le roulement des équipes. Ce projet valide ma capacité à concevoir une logique métier complexe, de l'architecture de données à la planification de tâches.",
    lienVideo: "https://youtu.be/VNPlw_WlJUw"
  },
  {
    id: 3,
    title: "Application vitrine plus gestion evenementiel",
    category: "Projet web",
    description: "Réalisé pendant les groupes, seule, en Laravel / Tailwind",
    annee: "3ème année",
    image: `${BASE}/images/projects/site_event.png`,
    descriptionLong: "Développée lors d'un projet académique basé sur un brief client, cette application Laravel a été conçue pour une agence événementielle afin d'automatiser les inscriptions à ses événements. Le projet met l'accent sur une architecture back-end robuste, l'utilisation d'Enums PHP et un système de mailing automatisé.\n\nL'application gère les événements publics et privés. Pour ces derniers, un système d'invitation par e-mail génère un token unique par invité, bloquant l'accès à la page aux seules personnes autorisées. À l'inscription, les participants peuvent ajouter un accompagnateur (plus-one) et renseigner leurs restrictions alimentaires. Un e-mail de validation avec lien de désinscription est alors envoyé. Pour la logistique, j'ai intégré un bouton d'extraction dans le back-office Filament permettant d'exporter la liste des inscrits au format Excel, avec une distinction claire entre invités et accompagnateurs pour transmettre facilement les habitudes alimentaires au traiteur.\n\nCôté administration, le back-office Filament PHP applique un cloisonnement strict des données via des Policies : chaque membre du personnel ne voit et ne gère que ses propres événements. Un rôle Administrateur global a été configuré pour obtenir une vue d'ensemble sur tous les événements et utilisateurs du site. Ce projet valide mes compétences en gestion de droits d'accès, sécurisation par jetons et génération d'exports de données métiers.",
    lienVideo: "https://youtu.be/Vk2h3Qkz2mQ"
  },
  {
    id: 4,
    title: "Escape Game",
    category: "Projet web",
    description: "Réalisé pendant une SAE, en groupe",
    annee: "3ème année",
    image: `${BASE}/images/projects/escape-game.jpg`,
    descriptionLong: "Escape Game est une application réalisée au cour d'une SAE réunisant le parcours web et le parcour Multimédia de MMI, le sujet était de réalisé un escape game sur 3 jours. Sur ce projet, nous avons décidé de créer une application web sur le vole d'un musée. Les utilisateurs incarnent le voleur, après leur premier vol le chrono se déclenche, c'est le temps restant avant que la sécurité n'arrive vous arrêté. Le but est de repartir avec le plus de bution possible à l'aide de tous les indices et en réussissant les énigmes, si vous n'êtes pas sorti dans les temps vous perdez. Sur la vidéo, vous verrez le site réalisé avec React.",
    lienVideo: "https://youtu.be/I-3JP2-eHnQ"
  },
  {
    id: 5,
    title: "Blind Test",
    category: "Projet web",
    description: "Réalisé pendant les cours, en solo, en ful-stack TALL",
    annee: "3ème année",
    image: `${BASE}/images/projects/blind-test.jpg`,
    descriptionLong: "Blind Test est une application réalisée au cour de cours sur Livewire. Le but du cour ainsi que le projet application étaient de maitriser son utilisation ainsi que de travailler sur une base de donnée AP, une base utilisateur ou utiliser sa propre base à fin de faire du traitement de donnée dynamique grâce à Livewire. Nous avions carte blanche sur l'application rendu, j'ai donc choisis de travailler sur un jeu de blind test, où les points sont calculé en fonction du nombre d'écoute, des bonnes réponces et des erreurs. Sur la vidéo, vous verrez le site réalisé en full-stack TALL (Laravel, Livewire, Tailwind, Alpine.js ).",
    lienVideo: "https://youtu.be/8RosSKFKTRU"
  },
  {
    id: 6,
    title: "Plant Betting",
    category: "Projet web",
    description: "Réalisé pendant les cours, en groupe, en Django",
    annee: "3ème année",
    image: `${BASE}/images/projects/plant-betting.jpg`,
    descriptionLong: "Plant Betting est une application réalisée au cour de cour sur le framework Django. Le sujet de travail était la création d'un site de pari, le thème n'était pas imposé. Sur ce projet, noua avons décidé de créer une application web de pari sur la mort des plantes, les utilisateurs peuvent gagner au perdre leurs points en fonction de la date qu'ils ont choisis pour la mort de la plante. Il ne peuvent pas parier sur leur propre plante. Sur la vidéo, vous verrez le site réalisé avec Django.",
    lienVideo: "https://youtu.be/_RD32dbulqI"
  },
  {
    id: 7,
    title: "HOT WAVES",
    category: "Projet web",
    description: "Réalisé pour une SAE, en groupen en Wordpress",
    annee: "1ème année",
    image: `${BASE}/images/projects/hot-waves.jpg`,
    descriptionLong: "Hot Waves est un projet réalisé au cours de la SAE de fin d'année qui a pour sujet la création et réalisation d'une communication de A à Z d'un festival ou d'un salon ou d'une convention. Avec mon groupe, nous sommes partis sur un festival de musique à Marseille. Sur la vidéo, vous verrez le site réalisé en WordPress",
    lienVideo: "https://youtu.be/sXlRAJBGFp8" 
  },
  {
    id: 8,
    title: "SNOWRIDE",
    category: "Projet web",
    description: "Réalisé pendant les cours, en solo, en HTML CSS",
    annee: "1ème année",
    image: `${BASE}/images/projects/snowride.png`,
    descriptionLong: "Snowride est un travail réalisé pendant la première partie du semestre 2 en développement front-end. Une image en jpeg du rendu voulu nous a été donné avec l'entièreté du html que l'on n'avait pas le droit de modifier. Le but était de reproduire l'image avec nos connaissances et principalement en display flex.",
    lienVideo: "https://youtu.be/t1__OnGS3L8" 
  }
];

export const drawings = [
  {
    id: 1,
    title: "Dessin 1",
    image: `${BASE}/images/drawings/chrismas.png`
  },
  {
    id: 2,
    title: "Dessin 2",
    image: `${BASE}/images/drawings/eventail.png`
  },
  {
    id: 3,
    title: "Dessin 3",
    image: `${BASE}/images/drawings/plante.png`
  },
  {
    id: 4,
    title: "Dessin 4",
    image: `${BASE}/images/drawings/selfie.png`
  }
];