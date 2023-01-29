
# Step 1 Work on personal workstation :Build DockerFile
## Server
 - Stage 1 Buid NPN (Node)
    

## Client
 - build  Multistage for better caching the layers
 - Stage 1 Buid NPN (Node)
 - Stage 2 Build Nginx a(copy the static files from Node build)
   


# Step 2 Work on personal workstation :Build Image
## Server
    docker build . -t gcr.io/storemaven-375719/tap-game-backend:1.0
    docker run -d -p 3001:3001 gcr.io/storemaven-375719/tap-game-backend:1.0

## Client
    docker build . -t gcr.io/storemaven-375719/tap-game-frontend:1.0
    docker run -d -p 80:80 gcr.io/storemaven-375719/tap-game-frontend:1.0

# Step 3 Publish Images on GCR Manualy   
## Server
    docker push gcr.io/storemaven-375719/tap-game-backend:1.0
## Client
    docker push gcr.io/storemaven-375719/tap-game-frontend:1.0

# Step 4 Publish Services on Cloud run Manualy
    Memory Usage :The service were unable to work with 512 MiB so i decided to work with 1GB

# Step 5 Perform CI CD with GitHUb Action
## Client +Server
Steps :
    Docker Build
    GCP Autentification
    Push Image to GCR
    Deploy To Cloud Run




    