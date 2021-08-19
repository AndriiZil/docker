# Docker main commands

```
    docker pull node
    docker run -it node
    
    docker rm <container id> <container id>
    docker container prune
    
    docker build .
    docker start <container id>
    docker stop <container id>
    
    docker run -p 3000:3000 <container id>
    docker run -d -p 80:3000 <container id>
    
    docker logs <container id>
    docker run -d -p 3000:3000 --name <container name> <image id>
    docker run -d -p 3000:3000 --name <container name> --rm <image id>
    
    docker build -t <image repository> .
    docker build -t <image repository>:<tag>
    
    docker tag <image repository> andriizilnyk/<image repository>
    
    docker login
    docker push andriizilnyk/<image repository>:<image tag>
    
    docker image inspect <image repository>
    docker run -d -p 80:4200 --env-file ./config/.env --rm --name exp-app exp-app:env
    
    docker run -d -p 3000:3000 -v logs:/app/data --rm --name logapp logapp:volumes
    docker run -d -p 3000:3000 -v "/home/andrii/Documents/learning/docker:/app" -v/app/node_modules -v logs:/app/data --rm --name logapp logapp:vol
```