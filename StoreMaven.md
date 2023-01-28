Server
docker build . -t gcr.io/storemaven-375719/tap-game-backend:0.1
docker run -d -p 3001:3001 gcr.io/storemaven-375719/tap-game-backend:0.1
docker push gcr.io/storemaven-375719/tap-game-backend:0.2


Client
docker build . -t gcr.io/storemaven-375719/tap-game-frontend:0.1
docker run -d -p 80:80 gcr.io/storemaven-375719/tap-game-frontend:1.8
docker push gcr.io/storemaven-375719/tap-game-frontend:0.1

Memory limit of 512 MiB exceeded with 514 MiB used. 