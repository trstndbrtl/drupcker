# Bump db

## Shared folders
Share folder with the postgres container for database exports.

```yml
  # Postgres to store data
  postgres9:
    container_name: postgres9
    image: postgres
    restart: always
    environment:
      POSTGRES_DB: ${POSTGRES_DB}
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_HOST: ${POSTGRES_HOST}
      POSTGRES_PORT: ${POSTGRES_PORT}
      ENV_NAME: ${ENV_NAME}
    volumes:
      - ./postgresql:/home/db <---- Shared folder
      - postgresql:/var/lib/postgresql/data
    ports:
     - ${POSTGRES_PORT}:5432
    networks:
      - d9pr
```