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
                    -   name: node
                        image: node:16-alpine3.12
                        command:
                        -   cat
                        tty: true
                '''
        } 
    }
    stages {
        stage('Clone') {
            steps {
             container('node'){
               sh 'npm version'
             }
            }
        }
    }
}