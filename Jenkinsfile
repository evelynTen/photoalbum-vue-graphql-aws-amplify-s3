pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/yuanning6/photoalbum-vue-graphql-aws-amplify-s3.git', branch: 'main')
      }
    }

    stage('Log') {
      parallel {
        stage('Log') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Front-End Unit Tests') {
          steps {
            sh 'npm i && npm run test:unit'
          }
        }

      }
    }

  }
}