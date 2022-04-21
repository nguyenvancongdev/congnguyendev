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
            steps {
                container('docker') {
                //    sh '''
                //    docker build -t nguyenvancongdev/automation-iops `pwd`
                //    docker login --username=nguyenvancongdev --password=Apr@2021
                //    docker push nguyenvancongdev/automation-iops
                //    '''
                    withDockerRegistry(credentialsId:'docker-hub1',url:'https://registry-1.docker.io/'){
                        sh '''
                            docker build -t nguyenvancongdev/automation-iops:latest `pwd`
                            docker push nguyenvancongdev/automation-iops:latest
                        '''
                    }
                }    
            }
        }
         stage('Deploy App to Kubernetes') {
            steps {
                container('kubectl') {
                    withCredentials([file(credentialsId: 'kubectl-config', variable:'KUBECONFIG')]) {
                        echo 'ggg'
                    }
                }    
            }
        }
    }
}