pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/yuanning6/photoalbum-vue-graphql-aws-amplify-s3.git', branch: 'main')
      }
    }

    stage('Log') {
      steps {
        sh 'ls -la'
      }
    }

    stage('Build') {
      steps {
        sh 'docker build -t yuanningliu/dockerize-vue-aws-amplify .      '
      }
    }

  }
}