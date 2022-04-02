pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/nguyenvancongdev/automation_IOPS.git'
            }
        }
        stage('Build stage') {
            steps {
               withDockerRegistry(credentialsId: 'docker-hub1', url: 'https://index.docker.io/') {
                   sh 'docker build -t nguyenvancongdev/automation_IOPS .'
                   sh 'docker push nguyenvancongdev/automation_IOPS'
                }
            }
        }
    }
}