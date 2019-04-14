FROM ruby:2.5

ADD . /app
WORKDIR /app

RUN bundle install

# Start the main process.
CMD ["rails", "server", "-e", "production"]