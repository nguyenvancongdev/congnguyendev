pipeline {
    agent { 
        kubernetes {
            yaml ''' 
                apiVersion: v1
                kind: Pod
                spec:
                    container: 
                    -   name: maven
                        image: maven:alpine
                        command:
                        -   cat
                        tty: true
                '''
        } 
    }
    stages {
        stage('Clone') {
            steps {
             container('maven'){
               sh 'mvn -version'
             }
            }
        }
    }
}