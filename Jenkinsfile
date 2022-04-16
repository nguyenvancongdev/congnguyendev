pipeline {
    agent { 
        kubernetes {
            yaml '''
apiVersion: v1
kind: Pod
spec:
    container: 
      - name: kaniko
        image: gcr.io/kaniko-project/executor:debug
        imagePullPolicy: Always
        command:
          - sleep
        args:
          - 9999999
        volumeMounts:
          - name: jenkins-docker-cfg
            mountPath: /kanico/.docker
    volumes:
      - name: jenkins-docker-cfg
        projected:
          sources:
            - secret:
                name: docker-credentials
                items:
                  - key: .dockerconfigjson
                    path: config.json
            '''      
        } 
    }
    stages {
        stage('Clone') {
            steps {
                echo 'ggg'
            }
        }
    }
}