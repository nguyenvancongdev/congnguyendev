pipeline {
    options {
        ansiColor('xterm')
    }
    agent { 
        kubernetes {
            yamlFile 'builder.yaml'           
        } 
    }
    stages {
         stage('Docker Build & Push Image') {
             environment {
                 Docker_Hub = credentials('docker-hub1')
             }
            steps {
                container('docker') {
                   sh '''
                   docker build -t nguyenvancongdev/automation-iops `pwd`
                   docker login --username=$Docker_Hub_USR --password=$Docker_Hub_PSW
                   docker push nguyenvancongdev/automation-iops
                   '''
                }    
            }
        }
         stage('Deploy App to Kubernetes') {
            steps {
                // container('kubectl') {
                //     withCredentials([file(credentialsId: 'kubectl-config', variable:'KUBECONFIG')]) {
                //        sh " kubectl scale deploy/nginx-1 --replicas=2"
                //     }
                // }   
                       sh " kubectl scale deploy/nginx-1 --replicas=2"

            }
        }
    }
}