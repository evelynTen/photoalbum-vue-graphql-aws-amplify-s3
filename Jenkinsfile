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
        sh 'docker build -t yuanningliu/devops-vue-aws-amplify:2.0.0 .'
      }
    }

    stage('Log into Dockerhub') {
      environment {
        DOCKERHUB_USER = 'yuanningliu'
        DOCKERHUB_PASSWORD = 'Dockerhub@1216'
      }
      steps {
        sh 'docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASSWORD'
      }
    }

    stage('Push') {
      steps {
        sh 'docker push yuanningliu/devops-vue-aws-amplify:2.0.0'
      }
    }

  }
}