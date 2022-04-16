pipeline {
    agent { 
        kubernetes {
            yamlFile 'builder.yaml'           
        } 
    }
    stages {
        stage('Clone') {
            steps {
             container(name:'node'){
                sh'npm version'
             }
            }
        }
    }
}