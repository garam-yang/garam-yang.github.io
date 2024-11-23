---
layout: single
title: "#17 배포를 위한 기술 스택 프리뷰"
categories: SSAFYCIAL
tag: SSAFY
toc: false
author_profile: false
published: true
typora-root-url: ../




---

안녕하세요! 11기 구미 캠퍼스 싸피셜 기자 김주현입니다! 오늘은 서버 배포와 관련된 기술 스택에 대해 정리해보는 시간을 가지고자 합니다!  GitLab, Gradle, npm, Docker, Jenkins, AWS EC2, S3, Nginx, MySQL, Redis 등 각 기술에 대한 설명과 함께 어떻게 배포 흐름이 맞물리는지 단계별로 살펴봅시다!

### **1. GitLab (버전 관리 및 협업 도구)**

<img src="/images/2024-11-16-ssafycial_aut9/gitlap_1-removebg-preview.png" alt="gitlap_1-removebg-preview" style="zoom:50%;" />

- **역할:** GitLab은 소스 코드의 버전 관리를 위한 Git 기반의 협업 도구입니다. 코드 변경 사항을 기록하고 팀 간 협업을 용이하게 해줍니다.
- **작동 방식:** 프로젝트 개발자는 코드 변경을 로컬에서 작업한 후 GitLab에 push하여 중앙 저장소에 반영합니다. 코드의 변경 이력 추적, 브랜치 관리, Merge Request 등을 통해 코드 품질을 유지합니다.
- **배포 과정에서의 역할:** GitLab의 CI/CD 파이프라인을 통해 코드가 변경될 때마다 자동으로 빌드와 테스트를 진행하며, 이후의 배포까지 자동화할 수 있습니다.

### **2. Gradle & npm (빌드 도구 및 의존성 관리)**

<img src="/images/2024-11-16-ssafycial_aut9/gradle-removebg-preview.png" alt="gradle-removebg-preview" style="zoom:50%;" />

<img src="/images/2024-11-16-ssafycial_aut9/npm-removebg-preview.png" alt="npm-removebg-preview" style="zoom: 50%;" />

- **역할:** Gradle은 Java, Kotlin 프로젝트에서 주로 사용되며, npm은 Node.js 기반의 프로젝트에서 패키지 관리를 합니다. 이 도구들은 프로젝트 의존성을 관리하고 빌드를 자동화해줍니다.
- **작동 방식:**
  - Gradle: build.gradle 파일에서 프로젝트의 의존성을 정의하고, 빌드 프로세스를 설정합니다. Gradle을 통해 애플리케이션의 컴파일, 테스트, 패키징이 자동으로 이루어집니다.
  - npm: package.json 파일에 프로젝트에 필요한 모듈을 정의하고 npm install 명령을 통해 필요한 라이브러리를 설치 및 관리합니다.
- **배포 과정에서의 역할:** CI/CD 파이프라인에서 Gradle을 사용해 프로젝트를 빌드하고, npm을 통해 자바스크립트 애플리케이션의 의존성 관리 및 빌드를 수행합니다.

### **3. Docker (애플리케이션 컨테이너화)**

<img src="/images/2024-11-16-ssafycial_aut9/docker-removebg-preview.png" alt="docker-removebg-preview" style="zoom:50%;" />

- **역할:** Docker는 애플리케이션을 컨테이너라는 독립된 환경에서 실행하도록 도와주는 도구입니다. 이를 통해 모든 개발, 테스트, 배포 환경이 일관성을 유지할 수 있습니다.
- **작동 방식:** 개발자는 애플리케이션과 그에 필요한 모든 의존성을 포함한 Dockerfile을 작성하여 애플리케이션을 이미지로 빌드합니다. 이후 이 이미지를 Docker 컨테이너에서 실행합니다.
- **배포 과정에서의 역할:** 빌드된 애플리케이션 이미지는 Docker Hub에 푸시되거나, 직접 서버에 배포됩니다. AWS EC2와 같은 환경에서 Docker 컨테이너를 실행하여 애플리케이션이 실행됩니다.

### **4. Jenkins (CI/CD 자동화 도구)**

- **역할:** Jenkins는 지속적 통합(CI) 및 지속적 배포(CD)를 위한 자동화 도구입니다. 코드가 변경될 때마다 자동으로 빌드, 테스트, 배포까지 자동화할 수 있습니다.
- **작동 방식:** Jenkins 파이프라인은 GitLab의 코드 변경사항을 감지하여 자동으로 빌드 및 배포 과정을 트리거합니다. Jenkinsfile을 통해 빌드 및 배포 단계가 정의됩니다.
- **배포 과정에서의 역할:** Jenkins는 GitLab에서 코드를 push하면 Gradle을 사용하여 빌드를 수행하고, Docker 이미지를 생성한 후 이를 AWS EC2 서버에 배포합니다.

### **5. AWS EC2 & S3 (클라우드 서버 및 스토리지)**

<img src="/images/2024-11-16-ssafycial_aut9/ec2-removebg-preview.png" alt="ec2-removebg-preview" style="zoom:50%;" />

<img src="/images/2024-11-16-ssafycial_aut9/s3-removebg-preview.png" alt="s3-removebg-preview" style="zoom:50%;" />

- **역할:**
  - EC2는 AWS에서 제공하는 가상 서버로, 애플리케이션을 실행할 수 있는 환경을 제공합니다.
  - S3는 대용량의 파일을 저장하고, 웹 서버와 분리된 정적 파일을 호스팅할 때 사용됩니다.
- **작동 방식:**
  - EC2: 애플리케이션은 Docker 컨테이너로 실행되며, Jenkins 또는 수동 배포 방식으로 EC2에 배포됩니다.
  - S3: 정적 자산(이미지, CSS, JavaScript 파일 등)은 S3에 저장되어 웹 애플리케이션에서 접근할 수 있게 합니다.
- **배포 과정에서의 역할:** Jenkins는 빌드된 애플리케이션을 EC2에 배포하며, 정적 파일은 S3에 업로드되어 빠르게 제공됩니다.

### **6. Nginx (리버스 프록시 및 로드 밸런서)**

<img src="/images/2024-11-16-ssafycial_aut9/nginx.png" alt="nginx" style="zoom: 25%;" />

- **역할:** Nginx는 리버스 프록시로서 외부의 요청을 내부 애플리케이션 서버(Docker 컨테이너)에 전달하고, 로드 밸런서 역할도 합니다.
- **작동 방식:** Nginx는 도메인 네임을 기반으로 요청을 수신하고, 이를 적절한 서버(컨테이너 또는 애플리케이션)로 전달합니다. 로드 밸런싱을 통해 여러 서버에 트래픽을 분배할 수 있습니다.
- **배포 과정에서의 역할:** Nginx는 EC2 인스턴스에서 실행되며, 여러 Docker 컨테이너로의 요청을 라우팅합니다. SSL 인증서 적용 등을 통해 보안을 강화할 수 있습니다.

### **7. MySQL (데이터베이스 관리)**

<img src="/images/2024-11-16-ssafycial_aut9/mysql-removebg-preview.png" alt="mysql-removebg-preview" style="zoom: 70%;" />

- **역할:** MySQL은 관계형 데이터베이스 관리 시스템(RDBMS)으로, 애플리케이션의 데이터 저장 및 관리를 담당합니다.
- **작동 방식:** 애플리케이션은 MySQL과 통신하여 데이터를 읽고, 쓰고, 업데이트합니다. MySQL은 AWS RDS와 같은 클라우드 기반 서비스로도 배포될 수 있습니다.
- **배포 과정에서의 역할:** EC2 인스턴스에 설치된 MySQL 또는 AWS RDS로 데이터베이스를 배포하여 애플리케이션의 데이터를 관리합니다.

### **8. Redis (캐싱 및 세션 관리)**

<img src="/images/2024-11-16-ssafycial_aut9/redis.png" alt="redis" style="zoom: 33%;" />

- **역할:** Redis는 메모리 기반의 NoSQL 데이터베이스로, 캐시와 세션 저장소로 많이 사용됩니다.
- **작동 방식:** 애플리케이션은 Redis를 사용해 세션 데이터를 저장하고, 빠르게 읽어들여 성능을 향상시킵니다. 또한, 자주 사용되는 데이터를 캐싱하여 데이터베이스 부하를 줄입니다.
- **배포 과정에서의 역할:** Redis는 EC2 인스턴스 또는 AWS ElastiCache와 같은 서비스에서 실행되며, 세션 및 캐시 데이터를 처리합니다.



------



### **배포의 전체 흐름**

1. **코드 작성 및 GitLab에 Push****
   개발자는 기능을 구현하고 GitLab에 코드를 push합니다.
2. **Jenkins 파이프라인 트리거****
   GitLab의 push 이벤트는 Jenkins 파이프라인을 트리거하여 빌드, 테스트, 배포 과정을 자동으로 실행합니다.
3. **빌드 및 Docker 이미지 생성****
   Jenkins는 Gradle 또는 npm을 사용해 프로젝트를 빌드하고, Docker 이미지를 생성합니다.
4. **AWS EC2에 Docker 이미지 배포****
   Jenkins는 생성된 Docker 이미지를 EC2 인스턴스에 배포하여 애플리케이션을 실행합니다.
5. **Nginx 설정****
   Nginx는 외부 요청을 수신하고, 이를 EC2에서 실행 중인 Docker 컨테이너에 전달합니다.
6. **MySQL 및 Redis 연결****
   애플리케이션은 MySQL을 사용해 데이터베이스에 연결하고, Redis를 캐시 및 세션 관리에 사용합니다.
7. **정적 파일 S3 배포****
   웹 애플리케이션에서 필요한 정적 파일(이미지, 자바스크립트, CSS 등)은 S3에 저장되어 빠르게 제공됩니다.

이 과정을 통해 일관된 환경에서 빠르고 안정적으로 애플리케이션을 배포할 수 있습니다. 각 단계가 자동화되어 있어 개발과 운영의 효율성을 높이는 것이 핵심입니다.

<img src="/images/2024-03-24-ssafycial_planned2/11기_구미_김주현.png" alt="11기_구미_김주현" style="zoom:50%;" />