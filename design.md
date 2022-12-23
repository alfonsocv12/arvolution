# Score API

For the Score API I'm going to use ts NodeJS with express this is because of the
promp requirements.

For the frontend to build it fast I'm going to use next js its probably to much
for the problem and I could solve this problem only using react js but because of
the limited time that I currently have I will prefer to move quickly

## Database

For the database I will want to have at least 2 tables one that handles the users
on this application we will belive that the people from the office will not use
other persons username so I will not create a JWT login, I will just let people
select or create a user to start a game once that is done they can save the game
here is the other table the one that handels the SCORE

```
    USERS
        ID uuid PRIMARY KEY
        USERNAME VARCHAR(50) UNIQUE
```

```
    SCORE
        ID uuid PRIMARY KEY
        PLAYER_Z uuid Foreign USERS
        PLAYER_X uuid Foreign USERS
        PLAYER_Z_SCORE number
        PLAYER_X_SCORE number
```
