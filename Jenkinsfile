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
                    // sh '''
                    // /kaniko/executor --dockerfile 'pwd'/Dockerfile \
                    //                  --context 'pwd' \
                    //                  --destination= 'yeu:latest'
                                      
                    // '''
                    echo 'rr'
                }
                }
            // 
            echo 'fff'
             
            }
        }
    }
}