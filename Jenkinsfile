pipeline {
    agent { 
        kubernetes {
        
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