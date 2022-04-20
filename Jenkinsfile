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
        stage('Kaniko Build & Push Image') {
            steps {
                container('kaniko') {
                    script {
                        sh '''
                         - echo "{\"auths\":{\"$CI_REGISTRY\":{\"nguyenvancongdev\":\"$CI_REGISTRY_USER\",\"Apr@2021\":\"$CI_REGISTRY_PASSWORD\"}}}" > /kaniko/.docker/config.json
                        /kaniko/executor --dockerfile `pwd`/Dockerfile \
                                        --context `pwd` \
                                        --destination nguyenvancongdev/demo-hello-users:v1
                                        
                                        
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