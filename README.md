# Portfolio d’Aboubacrine BAH

Portfolio personnel d’Aboubacrine BAH, développeur web full-stack à Bamako, au Mali. Le site présente son profil, ses services et des projets de démonstration.

## Technologies

- React et JavaScript
- Vite
- Bootstrap 5 et Bootstrap Icons
- Node.js et npm
- Playwright pour les tests d’interface

## Prérequis

- Node.js 22
- npm
- Chromium pour exécuter les tests d’interface

## Installation et démarrage

Depuis la racine du projet, installez les dépendances et démarrez le serveur de développement :

```bash
npm ci
npm run dev
```

Vite affiche l’adresse locale du site dans le terminal.

## Vérifications

```bash
npm run lint
npm test
npx playwright install chromium
npm run test:ui
npm audit --audit-level=high
npm run build
```

- `npm run lint` vérifie le code JavaScript et JSX avec ESLint.
- `npm test` exécute les tests unitaires avec le test runner Node.js.
- `npm run test:ui` lance les tests de l’interface dans Chromium.
- `npm audit --audit-level=high` recherche les vulnérabilités de dépendances de gravité élevée ou critique.
- `npm run build` génère le site prêt à être publié dans `dist/`.

Pour prévisualiser la version compilée :

```bash
npm run preview
```

## Déploiement

Le workflow GitHub Actions situé dans `.github/workflows/deploy.yml` vérifie les changements lors des pull requests et des envois sur `main`. Après réussite des vérifications, il publie le site sur GitHub Pages, prépare une page de repli pour que les liens directs vers les études de cas fonctionnent, puis contrôle que le site répond.

Dans les paramètres du dépôt GitHub, la source de publication Pages doit être configurée sur **GitHub Actions**.

## Structure du projet

```text
src/
  components/   Composants et sections de l’interface
  data/         Contenus du portfolio au format JSON
  hooks/        Hooks React
  pages/        Pages, dont les études de cas
  utils/        Fonctions utilitaires
public/         Images et ressources statiques
tests/          Tests unitaires
e2e/            Tests d’interface Playwright
```

## Licence

Le projet est soumis à la licence personnalisée décrite dans [LICENSE](./LICENSE). Les projets fictifs sont identifiés comme tels. Les dépendances et contenus de tiers restent soumis à leurs propres licences.
