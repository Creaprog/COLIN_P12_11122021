# Prérequis

- Node.js 16
- npm

# installation des dépendances

Il faudra se rendre via le terminal dans le répertoire du projet ensuite faire cette commande :
`npm install`

# Modification des variables d'environnements

REACT_APP_URL=http://127.0.0.1:4000/
REACT_APP_MOCK=false

Remplacer la valeur de REACT_APP_URL par l'url du site backend.

Dans le cas de figure il n'est pas possible de faire déployer le site en backend, mettre la variable REACT_APP_MOCK en true.

# Les pages accessibles

- / -> affiche les informations de l'utilisateur 12
- /user/12 -> affiche les informations de l'utilisateur 12
- /user/18 -> affiche les informations de l'utilisateur 18

# Exécution du front end

`npm start`

Excute le site sur la page http://127.0.0.1:3000

# Génération du site web static

`npm build`

Génére le site en html/css et Javascript pour un déploiement sur un serveur web. Les fichiers seront dans le dossier dist/
