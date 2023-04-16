pipeline {
  agent any
  tools{
    nodejs 'nodejs'
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
                  echo "Installing node modules and building..."
                  sh 'npm install'
                  sh 'npm run build'
                }

            }
         }
       
         stage('build image'){
            'steps'{
                script{
                    echo "building image"
                      withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                      sh 'sudo docker build -t ihebdockerid/app_frontend:2.0 .'
                      sh 'echo $PASS | docker login -u $USER --password-stdin'
                      sh 'sudo docker push ihebdockerid/app_frontend:2.0' }
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
