pipeline {
  agent any
  tools {
      NodeJS 'NodeJS16.13.0'
     }
      stages{
        stage('init'){
            steps{
                script {
                   echo "connected to github successfully"
                }
            }
        }

         stage('Install node modules'){
            steps{
                script{
                  echo "Installing node modules..."
                  sh 'npm install'
                }

            }
         }
        stage('Copy') {
          steps{ 
            script{
              echo "copyin files "
              sh 'cp -a /var/lib/jenkins/usr/local/app/dist/pfafront-end /var/www/jenkins_test/html/'
          }
          }
        }
         stage('build image'){
            'steps'{
                script{
                    echo "building image"
                      withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                      sh 'docker build -t ihebdockerid/app_frontend:2.0 .'
                      sh 'echo $PASS | docker login -u $USER --password-stdin'
                      sh 'docker push ihebdockerid/app_frontend:2.0' }
            }
        }
         }
         
           stage('deploy'){
              steps{
                script{
                    echo "deploying the application..."
                }
            }
         }

      }
  }
