---
title: "Introduction à JavaScript"
description: "JavaScript est un langage de programmation essentiel pour le développement web."
date: 2024-06-07
tags: ["programmation", "tech", "JS"]
slug: "article2"
thumbnail : '/img/img2.jpg'
draft: true
---

# Introduction à JavaScript

JavaScript est un langage de programmation essentiel pour le développement web. Créé en 1995 par Brendan Eich, JavaScript est devenu l'un des piliers du développement web aux côtés de HTML et CSS. Il permet d'ajouter de l'interactivité et de la dynamique aux pages web.

## Histoire de JavaScript

JavaScript a été initialement développé par Netscape et a été introduit pour la première fois en 1995 sous le nom de LiveScript. Rapidement rebaptisé JavaScript, il a gagné en popularité grâce à sa capacité à rendre les pages web interactives.

## Fonctionnalités Principales

JavaScript offre de nombreuses fonctionnalités puissantes :

- **Manipulation du DOM** : Permet de modifier la structure et le contenu des pages web de manière dynamique.
- **Événements** : Gère les interactions utilisateur comme les clics de souris, les frappes de clavier, etc.
- **Fonctions** : Blocs de code réutilisables qui peuvent être appelés avec différents arguments.
- **Asynchronicité** : Grâce aux callbacks, promesses et async/await, JavaScript peut gérer des opérations asynchrones, comme les requêtes réseau, sans bloquer le fil d'exécution principal.

## Exemple de Code

Voici un exemple simple de code JavaScript qui affiche une alerte lorsqu'un bouton est cliqué :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple JavaScript</title>
</head>
<body>
    <button id="myButton">Cliquez-moi</button>

    <script>
        document.getElementById('myButton').addEventListener('click', function() {
            alert('Bouton cliqué !');
        });
    </script>
</body>
</html>