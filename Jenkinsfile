pipeline {
    agent 'jenkins-k8s'
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/nguyenvancongdev/automation_IOPS.git'
            }
        }
        // stage('Build stage') {
        //     steps {
        //         sh 'docker -v'
        //        withDockerRegistry(credentialsId: 'docker-hub1', url: 'https://index.docker.io/v1') {
        //         //    sh 'docker build -t nguyenvancongdev/automation_IOPS .'
        //         //    sh 'docker push nguyenvancongdev/automation_IOPS'
        //                 sh 'docker -v'
        //         }
        //     }
        // }
    }
}