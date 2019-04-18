CREATE TABLE IF NOT EXISTS workout (
  id serial PRIMARY KEY,
  title varchar (50),
  textData varchar (500),
  createdAt TIMESTAMP NOT NULL
)