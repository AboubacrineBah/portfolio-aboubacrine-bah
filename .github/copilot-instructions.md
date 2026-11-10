# Consignes du projet

## Architecture

- Le site est une application React avec Vite, écrite en JavaScript et JSX.
- Réutilise les composants dans `src/components/`, les données JSON dans `src/data/` et les hooks dans `src/hooks/`.
- Conserve les composants fonctionnels et les conventions déjà présentes dans le fichier concerné.
- `dist/` est généré par Vite : ne le modifie pas directement.

## Interface et contenu

- Préserve le design responsive, la sémantique HTML et l’accessibilité clavier et lecteur d’écran.
- Garde le contenu du portfolio en français et n’invente pas d’informations personnelles, de réalisations ou de liens.
- Les projets de démonstration doivent rester identifiés comme tels.

## Vérification

- Après une modification de code, exécute `npm run build`.
- Aucun script de test ou de lint n’est actuellement défini dans `package.json`.
