FROM ruby:2.4.2-alpine

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

ENV INSTALL_PATH /app

ADD . /app
WORKDIR /app

RUN  gem install bundler -v 1.17.3
RUN bundle install

CMD ["rails", "server", "-e", "production"]