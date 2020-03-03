# Documentation Rest API

## `POST` /account/create
Permet de créer un compte
### Paramètres
* email: `string`
* password: `string`
* department: `string`
### Renvoie
* `400` result: **ERR_ARGS** paramètres manquants
* `400` result: **ERR_MAIL** email non conforme
* `400` result: **ERR_DUP**  email existe déjà
* `200` result: **OK** compte créé (mail vérification envoyé)

## `GET` /account/validate/:token
Permet de valider un compte à partir d'un token fournit
### Paramètres
aucun paramètres
### Renvoie
* `400` result:**ERR_TOKEN** token non valide
* `400` result:**ERR_VALID** impossible de valider le compte
* `503` result:**ERR_BDD** erreur interne liée à la base de donnée
* `200` result:**OK** compte valider

## `POST` /account/connect
Permet d'obtenir un token d'authentification
### Paramètres
* email: `string`
* password: `string`
### Renvoie
* `400` result:**ERR_ARGS** paramètres manquants
* `503` result:**ERR_BDD** erreur interne liée à la base de donnée
* `400` result:**ERR_INFO** les informations sont incorrect
* `400` result:**ERR_CHECK** le compte n'a pas été vérifié
* `200` result:**OK**, token:**\<string>** token envoyé

## `GET` /annonce/
Permet d'obtenir les annonces
### Paramètre (query)
* page: `int`
* show: `int`
### Renvoie
* `503` result:**ERR_BDD** erreur interne liée à la base de donnée
* `200` result:**OK**, annonce:**\<json>** annonce envoyée

## `POST` /annonce/create ___`(en cours)`___ ___`(pas implémentée)`___
Permet de créer une annonce
### Paramètres
* title: `string`
* data: `string`
* image: `URL` ___`(optionnel)`___
### Renvoie
* `503` result:**ERR_BDD** erreur interne liée à la base de données
* `200` result:**OK** annonce créée 

## `POST` /notification/register
Permet d'ajouter un token de notification dans la base de données
### Paramètre
* email: `string`
* token: `token`
### Renvoie
* `503` result:**ERR_BDD** erreur interne liée à la base de données
* `200` result:**OK** token notification lié

## `POST` /notification/send
Permet d'envoyé une notification
### Paramètre
* title: `string`
* body: `string`
### Renvoie
* `200` result:**OK**

## `GET` /permissions/:user ___`(en cours)`___ ___`(pas implémentée)`___
Permet de connaitre les permissions d'un utilisateur
### Paramètre
aucun paramètres
### Renvoie

## `POST` /permissions/add ___`(en cours)`___ ___`(pas implémentée)`___
Permet d'ajouter des permissions a un utilisateur
### Paramètre
