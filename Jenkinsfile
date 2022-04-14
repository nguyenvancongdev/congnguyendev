pipeline {
    agent { 
        kubernetes {
            yaml '''
                apiVersion: v1
                kind: Pob
                spec:
                    containers:
                    - name: nginx-cong
                    image: nginx:latest
                '''
        }
     }
    stages {
        stage('Cloe') {
            steps {
               echo 'toir'
            }
        }
    }
}