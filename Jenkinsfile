node{
    git branch: 'master',url:'https://github.com/jacky-mb/express-mockservice.git',credentialsId:'github'
    sh "sudo chmod 777 ."
    docker.withTool('docker-local'){
        app = docker.build('anhlt1207/mock:latest')
        docker.withRegistry('https://registry.hub.docker.com', 'docker hub') {  
                                app.push("${env.BUILD_NUMBER}")
                                app.push("latest")
        }
    }
}