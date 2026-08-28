# Prêt à Vendre

Petite appli 100% gratuite pour préparer tes annonces Vinted : tu prends les photos, l'IA (Gemini, gratuit) génère titre + description + prix + tags, tu ajustes, tu copies et tu publies sur Vinted en quelques secondes.

## ⚠️ Important à savoir

Vinted n'a pas d'API publique permettant de publier une annonce automatiquement depuis une appli tierce, et je n'ai pas construit de système imitant leur application en cachette (ça violerait leurs conditions d'utilisation et risquerait de faire bannir ton compte). L'appli fait donc le maximum possible dans les règles :
- elle génère la fiche complète,
- elle copie tout dans ton presse-papier,
- elle ouvre directement la page « nouvelle annonce » de Vinted.

Il te reste juste à coller le texte et importer les photos (2 gestes).

## 1. Récupérer une clé API Gemini gratuite (2 minutes)

1. Va sur **https://aistudio.google.com/apikey** (connecte-toi avec un compte Google).
2. Clique sur **Create API key**.
3. Copie la clé (elle commence par `AIza...`).
4. Colle-la dans l'appli, onglet **Réglages**.

Le tier gratuit de Gemini (`gemini-2.5-flash` ou `gemini-2.0-flash`) suffit largement pour un usage perso ou entre potes (plusieurs centaines de requêtes/jour selon le modèle, sans carte bancaire).

## 2. Héberger l'appli gratuitement pour pouvoir l'installer sur ton téléphone

Pour que ton téléphone propose « Ajouter à l'écran d'accueil » (comme une vraie appli), il faut que les fichiers soient servis en HTTPS. Deux options gratuites, au choix :

### Option A — Netlify Drop (le plus simple, aucun compte requis)
1. Va sur **https://app.netlify.com/drop**
2. Glisse-dépose le dossier `pretavendre` (celui qui contient `index.html`) directement dans la page.
3. Netlify te donne une URL du type `https://xxxx.netlify.app`.
4. Ouvre cette URL sur ton téléphone (Chrome/Safari) → menu → **Ajouter à l'écran d'accueil**.

### Option B — GitHub Pages (si tu as déjà un compte GitHub)
1. Crée un nouveau dépôt (public ou privé).
2. Mets les fichiers de ce dossier à la racine du dépôt.
3. Dans les Settings du dépôt → **Pages** → Source : la branche `main`, dossier `/root`.
4. GitHub te donne une URL `https://tonpseudo.github.io/nomdudepot/`.
5. Ouvre-la sur ton téléphone et fais **Ajouter à l'écran d'accueil**.

Pour tes potes : partage-leur simplement l'URL. Chacun installe l'appli et rentre **sa propre clé Gemini gratuite** dans ses Réglages (les clés restent uniquement sur l'appareil de chacun, rien n'est partagé ni envoyé sur un serveur).

## 3. Utilisation au quotidien

1. Onglet **Nouveau** → prends 1 à 5 photos de l'article.
2. Appuie sur **Générer la fiche avec l'IA**.
3. Relis/corrige le titre, la description, le prix, les tags (l'IA peut se tromper, notamment sur la marque ou l'état — vérifie toujours avant de publier).
4. Deux façons d'importer dans Vinted :
   - **Copier la fiche en texte** puis colle-la à la main dans les champs Vinted (marche toujours, 0 réglage).
   - **Copier pour auto-remplissage ⚡** puis, une fois sur la page « nouvelle annonce » de Vinted, tape sur ton favori **« Auto-remplir Vinted »** (à installer une fois, voir section 4 ci-dessous) : le titre, la description et le prix se remplissent tout seuls.
5. Dans les deux cas : ajoute toi-même les photos et clique toi-même sur Publier — ça reste volontairement manuel pour que tu vérifies avant que l'annonce parte.
6. Optionnel : **Enregistrer dans l'historique** pour garder une trace de tes annonces passées.

## 4. Installer l'auto-remplissage ⚡ (une seule fois)

Dans l'appli, onglet **Réglages**, section « Auto-remplissage Vinted » :
1. Appuie sur **Copier le code**.
2. Crée un nouveau favori de navigateur (n'importe quelle page), renomme-le **« Auto-remplir Vinted »**.
3. Modifie ce favori et remplace son adresse par le code que tu viens de copier (colle-le à la place de l'URL).
4. C'est fait, une bonne fois pour toutes — chaque pote qui installe l'appli doit faire cette étape une seule fois aussi, sur son propre téléphone.

**Limites à connaître** : ce script lit ton presse-papier et remplit les champs qu'il reconnaît (titre, description, prix) sur la page Vinted — il n'ajoute jamais les photos et ne clique jamais sur Publier à ta place (ni techniquement possible pour les photos, ni souhaitable pour la publication : le dernier geste doit rester le tien). Comme Vinted peut changer la structure de son site à tout moment, ce favori peut cesser de fonctionner un jour — dans ce cas, retombe simplement sur le copier-coller manuel (toujours disponible), qui lui ne peut pas casser.

## Notes techniques
- Tout tourne dans le navigateur, aucun serveur derrière : les photos ne partent que vers l'API Gemini le temps de l'analyse, rien n'est stocké ailleurs que sur le téléphone (`localStorage`).
- La clé API est visible dans le code source côté client — c'est normal pour un outil perso comme celui-ci, mais ne mets jamais ce projet dans un dépôt GitHub **public** avec ta clé écrite en dur quelque part : elle se saisit uniquement dans l'appli, jamais dans les fichiers.
- Si Gemini répond une erreur de quota, attends un peu ou repasse sur `gemini-2.0-flash-lite` dans Réglages.
