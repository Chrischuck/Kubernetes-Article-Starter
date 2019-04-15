FROM ruby:2.4.2-alpine

RUN apk update && apk add build-base nodejs postgresql-dev tzdata
RUN apk add --update bash && rm -rf /var/cache/apk/*

ENV BUNDLER_VERSION=2.0.1

ADD . /app
WORKDIR /app

RUN gem install bundler
RUN bundle install

ARG SECRET_KEY_BASE="$(bundle exec rake secret)"
ENV SECRET_KEY_BASE=${SECRET_KEY_BASE}

EXPOSE 3000

CMD ["rails", "server", "-e", "production"]