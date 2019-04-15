FROM ruby:2.4.2-alpine

RUN apk update && apk add build-base nodejs postgresql-dev

RUN mkdir app
WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN bundle install

ADD . app

CMD ["rails", "server", "-e", "production"]