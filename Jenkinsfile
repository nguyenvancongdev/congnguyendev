pipeline {
    agent { 
        kubernetes {
            yamlFile 'builder.yaml'           
        } 
    }
    stages {
        stage('Clone') {
            steps {
             container('node'){
                npm version
             }
            }
        }
    }
}