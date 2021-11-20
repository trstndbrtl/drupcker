#!/bin/bash  -x
set -ex
# On lance nos commandes
echo "WORKSPACE $ENV_NAME"
# If is Dev Install dev tools
if [ "$ENV_NAME" = 'DEV' ]; then
  composer update
else
  composer update --no-dev
fi
# On sort du script
exec "$@"