
# How to Run:

* First, clone this repository:

```
https://github.com/marlonfernando16/Paylav-Challenge.git
```

* On root folder:

```
docker-compose up -d
```

* Move the cloned project to the created rails folder 


* enter the rails container:

```
docker attach rails-container 
```

* In the project, install dependencies:

```
bundle install
```

* create database:

```
rails db:create
```

* Run migrations:

```
rails db:migrate
```

* Run server:

```
rails s -b 0.0.0.0
```
