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
                    - name: nginx-deployment
                    # image của container docker
                        image: nginx
                        ports:
                        # port bên trong container
                        - containerPort: 8080
                ---
                apiVersion: v1
                kind: Service
                metadata:
                name: nginx-svc
                spec:
                ports:
                - port: 80
                    targetPort: 8080
                    protocol: TCP
                    name: http
                selector:
                    app: nginx-deployment
                type: ClusterIP
            '''
    stages {
        stage('Clone') {
            steps {
              git url:'https://github.com/nguyenvancongdev/automation_IOPS.git', branch:'master'
            }
        }
    }
}