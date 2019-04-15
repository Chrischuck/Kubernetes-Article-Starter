FROM ruby:2.4.2-alpine

RUN apk update && apk add build-base nodejs postgresql-dev

ENV INSTALL_PATH /app

ADD . /app
WORKDIR /app

RUN  gem install bundler -v 1.17.3
RUN bundle install

CMD ["rails", "server", "-e", "production"]