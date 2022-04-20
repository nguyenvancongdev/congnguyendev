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
                        /kaniko/executor --dockerfile `pwd`/Dockerfile \
                                         --context `pwd` \
                                         --destination= nguyenvancongdev/automation-iops:${BUILD_NUMBER}        
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