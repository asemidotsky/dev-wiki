# Docker

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

## Get container environment variables

```bash
docker exec mycontainer /usr/bin/env
docker exec mycontainer /bin/sh -c /usr/bin/env
docker exec mycontainer printenv my_env_var

docker inspect mycontainer --format "{{.Config.Env}}"
docker inspect mycontainer | jq -r '.[].Config.Env[]|select(match("^my_env_var"))|.[index("=")+1:]'
```

## Container group operations

```bash
sudo docker stop $(sudo docker ps -aq --filter name=doremi-*)
```

## Clear images

[How To Remove Docker Images, Containers, and Volumes](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes)

```bash
# clean up any resources — images, containers, volumes, and networks — that are dangling (not associated with a container)
docker system prune

# To additionally remove any stopped containers and all unused images (not just dangling images), add the -a flag to the command:
docker system prune -a

# Removing only images
docker images -a # locate
docker rmi Image Image # remove

# Locating dangling images
docker images -f dangling=true
docker image prune # clean

# removing by pattern
docker images -a | grep "pattern" | awk '{print $3}' | xargs docker rmi
```

## Links

[Securely using .npmrc files in Docker images](https://www.alexandraulsh.com/2018/06/25/docker-npmrc-security/)

## Install app in container

```bash
apt-get update
apt-get -y install curl
```

## Docker Registry

```bash
# Get repositories (images) list
curl -X GET https://myregistry:5000/v2/_catalog
> {"repositories":["redis","ubuntu"]}

# Get image tags
curl -X GET https://myregistry:5000/v2/ubuntu/tags/list
> {"name":"ubuntu","tags":["14.04"]}
```

## Configure Docker REST API

1. Open the file `/lib/systemd/system/docker.service`
1. Modify the following line:

```bash
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H tcp://0.0.0.0:2375 --tlsverify --tlscacert=/etc/docker/ssl/ca.pem --tlscert=/etc/docker/ssl/server-cert.pem --tlskey=/etc/docker/ssl/server-key.pem
```

1. Reload the configuration and restart the Docker daemon:

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker.service

curl http://localhost:2375/version
```

https://docs.docker.com/engine/security/protect-access/

## Manage secrets in Docker

* Docker Swarm has support for manage secrets

## Docker Engine without Docker Desktop on Windows

* https://www.paulsblog.dev/how-to-install-docker-without-docker-desktop-on-windows/

## WSL 2

[Basic commands for WSL](https://learn.microsoft.com/en-us/windows/wsl/basic-commands)

From admin command prompt:

```bash
# to check wsl version
wsl -l -v

# from inside of WSL vm
uname
uname -r
```