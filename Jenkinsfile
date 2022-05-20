pipeline {
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
                   docker build -t nguyenvancongdev/congnguyendev:${BUILD_NUMBER} `pwd`
                   docker login --username=$Docker_Hub_USR --password=$Docker_Hub_PSW
                   docker push nguyenvancongdev/congnguyendev:${BUILD_NUMBER}
                   '''
                }    
            }
        }
         stage('Deploy App to Kubernetes') {
            steps {
                container('kubectl') {
                   
                       sh 'kubectl set image deployment nginx-1 nginx-1=nguyenvancongdev/congnguyendev:${BUILD_NUMBER}'
                    
                }   
            }
        }
    }
}
