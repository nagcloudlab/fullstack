-- CREATE ROLE super WITH LOGIN PASSWORD 'super';

-- CREATE ROLE superman WITH LOGIN PASSWORD 'superman' NOSUPERUSER INHERIT NOCREATEDB NOCREATEROLE NOREPLICATION;

-- GRANT ALL PRIVILEGES ON DATABASE gud_sho_db TO superman ;
-- GRANT ALL PRIVILEGES ON DATABASE gud_sho_db TO super;


create database gud_sho_db;
use gud_sho_db;

create table movies(
    id int primary key auto_increment,
    title varchar(50) NOT NULL,
    duration int
);
create table genres(
    id int primary key auto_increment,
    genre varchar(50) NOT NULL
);
create table movies_genres(
    movie_id int,
    genre_id int,
    FOREIGN KEY (movie_id) references movies(id),
    FOREIGN KEY (genre_id) references genres(id)
);
insert into genres (genre) values('romance');
insert into genres (genre) values('adventure');
insert into genres (genre) values('fantasy');



