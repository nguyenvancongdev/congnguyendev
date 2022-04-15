pipeline {
    agent { 
        kubernetes {
            yaml ''' 
                apiVersion: apps/v1
                kind: Deployment
                metadata:
                    name: nginx-deployment
                spec:
                    replicas: 2
                    selector:
                        matchLabels:
                            app: nginx-deployment
                    template:
                        metadata:
                            labels:
                                app: nginx-deployment
                        spec:
                            containers:
                            -   name: nginx-deployment
                                image: nginx
                                ports:
                                -   containerPort: 8080
                '''
        } 
    }
    stages {
        stage('Clone') {
            steps {
              git url:'https://github.com/nguyenvancongdev/automation_IOPS.git', branch:'master'
            }
        }
    }
}