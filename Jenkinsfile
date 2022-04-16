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
        stage('Clone') {
            steps {
             container('maven'){
                 sh 'mvn -version'
             }
             
            }
        }
    }
}