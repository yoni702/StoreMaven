Server
docker build . gcr.io/storemaven-375719/tap-game-backend:0.1
docker push gcr.io/storemaven-375719/tap-game-backend:0.2


Client
docker build . gcr.io/storemaven-375719/tap-game-frontend:0.1
docker push gcr.io/storemaven-375719/tap-game-frontend:0.1

Memory limit of 512 MiB exceeded with 514 MiB used. 