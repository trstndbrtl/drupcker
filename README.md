# Drupcker9 Stack 2022

Great enviroment Drupal 9 for magazine in a Docker container.

## Prerequisites

- Docker
- Docker compose

## About

- Drupal
- Drupal test with Behat
- Drush Good practices
- CMI Good practices

## Build enviroment

### .env Configuration

To start the docker compose, you will first need to copy the .env.default file to the root of the project and rename it `.env`

Then, either you leave the default configurations (which we do not recommend, if you use this tool in a production environment), or you fill in your configurations.

In this case:
- If you use the CMI paradigm,.

```bash
# Workspace
# DEV|RECETTE|PROD
# If you choose "DEV" space, Kint, Devel and Behat tools will be activated
ENV_NAME=DEV
```

- A name of the database and its user, port and host.

```bash
# Postgres
POSTGRES_DB=magazine_2947
POSTGRES_USER=poetry_king
POSTGRES_PASSWORD=7!Z@ft6@54NResdF@5P
POSTGRES_HOST=postgres9
POSTGRES_PORT=5432
```

#### The file
```bash
# Workspace
# DEV|RECETTE|PROD
# If you choose "DEV" space, Kint, Devel and Behat tools will be activated
ENV_NAME=DEV
# Image tag version
TAG_VERSION=1.0.0
# Drupal
DRUPAL_VERSION=9.2.9
DRUPAL_HOSTNAME=dev9.mm
DRUPAL_PORT=8091
# Postgres
POSTGRES_DB=magazine_2947
POSTGRES_USER=poetry_king
POSTGRES_PASSWORD=7!Z@ft6@54NResdF@5P
POSTGRES_HOST=postgres9
POSTGRES_PORT=5432
# Adminer
ADMINER_PORT=8011
```

## Run enviroment

Positionnez-vous à la racine du projet,

```bash
cd ~/Documents/Workspace/drucker
```

pour lancer la commande up,

```bash
docker compose up -d --build
```

Veuillez attendre la construction des containers.

```bash
[+] Running 5/5
 ⠿ Network drucker_d9pr           Created                    0.1s
 ⠿ Volume "drucker_postgresql"    Created                    0.0s
 ⠿ Container postgres9            Started                    0.5s
 ⠿ Container adminer9             Started                    1.5s
 ⠿ Container drucker9             Started                    2.0s
```

Puis, lorsque les containers sont construits, veuillez patienter encore un peu, le temps de l'update de "composer".
Celui-ci est lancé à la fin de la construction des containers, via l'entrypoint déclaré dans le fichier `/drucker/config/d9/Dockerfile`.

```dockerfile
COPY ./config/d9/entrypoint.sh /opt/drupal/entrypoint.sh
RUN chmod +x /opt/drupal/entrypoint.sh
ENTRYPOINT [ "/opt/drupal/entrypoint.sh" ]
```

Cette opération dure 2 à 5 minutes, ce temps varie selon la puissance de votre ordinateur ou la rapidité de votre connexion, soyez patient. Pour vérifier que la procédure "compose" est terminée, veuillez consulter les logs du container de l'application, si vous n'avez pas modifier le nom du container, celui-ci s'appelle `drucker9`,

```bash
docker logs drucker9
```

Composer est encore au travail

```bash
+ set -ex
+ echo 'WORKSPACE DEV'
+ '[' DEV = DEV ']'
+ composer update
WORKSPACE DEV
Loading composer repositories with package information
Updating dependencies
Lock file operations: 68 installs, 0 updates, 0 removals
  - Locking alchemy/zippy (0.4.9)
  - Locking behat/behat (v3.10.0)
  - Locking behat/gherkin (v4.9.0)
  - Locking behat/mink (v1.9.0)
  - Locking behat/mink-browserkit-driver (v1.4.0)
  - Locking behat/mink-extension (2.3.1)
  - Locking behat/mink-goutte-driver (v1.3.0)
  - Locking behat/mink-selenium2-driver (v1.5.0)
  - Locking behat/transliterator (v1.3.0)
  - Locking chi-teck/drupal-code-generator (1.33.1)
  - Locking consolidation/annotated-command (4.4.0)
  - Locking consolidation/config (1.2.1)
  - Locking consolidation/filter-via-dot-access-data (1.0.0)
  - Locking consolidation/log (2.0.2)
  - Locking consolidation/output-formatters (4.1.2)
  - Locking consolidation/robo (3.0.6)
  - Locking consolidation/self-update (2.0.0)
  - Locking consolidation/site-alias (3.1.1)
  - Locking consolidation/site-process (4.1.0)
  - Locking cweagans/composer-patches (1.7.1)
  - Locking dflydev/dot-access-configuration (v1.0.3)
  - Locking dflydev/dot-access-data (v1.1.0)
  - Locking dflydev/placeholder-resolver (v1.0.2)
```

Composer à terminé

```
  - Installing behat/mink-goutte-driver (v1.3.0): Extracting archive
  - Installing behat/behat (v3.10.0): Extracting archive
  - Installing behat/mink-extension (2.3.1): Extracting archive
  - Installing drupal/drupal-extension (v4.1.0): Extracting archive
  - Installing drupal/inline_entity_form (1.0.0-rc9): Extracting archive
  - Installing drupal/entity_reference_revisions (1.9.0): Extracting archive
  - Installing drupal/paragraphs (1.12.0): Extracting archive
  - Installing drupal/token (1.9.0): Extracting archive
  - Installing drupal/ctools (3.7.0): Extracting archive
  - Installing drupal/pathauto (dev-1.x 43c8079): Cloning 43c8079eac from cache
  - Installing drupal/restui (1.20.0): Extracting archive
  - Installing league/container (3.4.1): Extracting archive
  - Installing grasmash/yaml-expander (1.4.0): Extracting archive
  - Installing enlightn/security-checker (v1.9.0): Extracting archive
  - Installing grasmash/expander (1.0.0): Extracting archive
  - Installing consolidation/config (1.2.1): Extracting archive
  - Installing consolidation/site-alias (3.1.1): Extracting archive
  - Installing consolidation/site-process (4.1.0): Extracting archive
  - Installing consolidation/robo (3.0.6): Extracting archive
  - Installing consolidation/filter-via-dot-access-data (1.0.0): Extracting archive
  - Installing chi-teck/drupal-code-generator (1.33.1): Extracting archive
  - Installing drush/drush (10.6.1): Extracting archive
  - Installing kint-php/kint (3.3): Extracting archive
  0/53 [>---------------------------]   0%
 10/53 [=====>----------------------]  18%
 20/53 [==========>-----------------]  37%
 30/53 [===============>------------]  56%
 40/53 [=====================>------]  75%
 50/53 [==========================>-]  94%
 53/53 [============================] 100%
    Cleaning: symfony/dom-crawler
    Cleaning: symfony/browser-kit
    Cleaning: symfony/css-selector
    Cleaning: behat/mink
    Cleaning: symfony/filesystem
    Cleaning: instaclick/php-webdriver
    Cleaning: behat/mink-selenium2-driver
    Cleaning: fabpot/goutte
    Cleaning: behat/mink-goutte-driver
18 package suggestions were added by new dependencies, use `composer suggest` to see details.
Package doctrine/reflection is abandoned, you should avoid using it. Use roave/better-reflection instead.
Package webmozart/path-util is abandoned, you should avoid using it. Use symfony/filesystem instead.
Generating autoload files
Hardening vendor directory with .htaccess and web.config files.
55 packages you are using are looking for funding.
Use the `composer fund` command to find out more!
Cleaning installed packages.
+ exec apache2-foreground
[Sat Nov 20 18:06:06.828143 2021] [mpm_prefork:notice] [pid 1] AH00163: Apache/2.4.38 (Debian) PHP/7.4.26 configured -- resuming normal operations
[Sat Nov 20 18:06:06.828215 2021] [core:notice] [pid 1] AH00094: Command line: 'apache2 -D FOREGROUND'
```

Le log `[Sat Nov 20 18:06:06.828215 2021] [core:notice] [pid 1] AH00094: Command line: 'apache2 -D FOREGROUND'` signifie que `Composer` à terminé son travail, vous pouvez mainteant consulter le site.

Si vous n'avez pas changer la configuration `DRUPAL_PORT` dans le fichier .env, le site est disponible à l'url suivante: `http://localhost:8091`.

