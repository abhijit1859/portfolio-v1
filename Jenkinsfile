pipeline {
    agent any

    environment {
        IMAGE_NAME = 'portfolio-app'
        CONTAINER_NAME = 'portfolio-container'
    }

    stages {

        stage('CI - Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('CI - Build Next App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('CD - Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('CD - Stop Old Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('CD - Deploy Container') {
            steps {
                sh '''
                docker run -d \
                  -p 80:3000 \
                  --name $CONTAINER_NAME \
                  $IMAGE_NAME
                '''
            }
        }
    }
}