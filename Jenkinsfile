pipeline {
    agent { 
        kubernetes {
            yaml '''
                apiVersion: v1
                kind: Pob
                spec:
                    containers:
                    - name: maven
                    image: maven:alpine
                    command:
                    - cat
                    tty: true
                '''
        }
     }
    stages {
        stage('Clone') {
            steps {
               echo 'toir'
            }
        }
    }
}