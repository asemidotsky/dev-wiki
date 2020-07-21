## Docker Compose

```bash
# build container without cache
docker-compose build --no-cache

# run image
docker-compose up
docker-compose down
```

## Move image

```bash
# docker save -o <path for generated tar file> <image name>
docker save linuxconfig > linuxconfig.tar

#docker load -i <path to image tar file>
docker load -i linuxconfig.tar
```

## Attach to container

```bash
docker exec -it --user root <container id> /bin/bash

# run in interactive mode
docker run -it [myimage]
```

## Execute command

```bash
docker exec -t --user www-data container bash -c "ls -la"
```