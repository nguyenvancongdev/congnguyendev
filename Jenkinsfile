pipeline {
    agent { 
        kubernetes {
        
        }
     }
    stages {
        stage('Clone') {
            steps {
              git 'https://github.com/nguyenvancongdev/automation_IOPS.git', branch:'master'
            }
        }
    }
}