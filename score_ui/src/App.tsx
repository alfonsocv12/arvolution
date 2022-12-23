import React, { useState } from 'react';
import './App.css';
import { Flex, Card, CardBody, Text, Input, Button } from "@chakra-ui/react";
import env from './env';

async function getUserId(username: string) {
  const resp = await fetch(`${env.scoreApi}user`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({username: username})
    });

    const user = await resp.json();
    return user.id;
}

function App() {
  const [playerX, setPlayerX] = useState('');
  const [pXScore, setPXScore] = useState(0);
  const [playerZ, setPlayerZ] = useState('');
  const [pZScore, setPZScore] = useState(0);

  async function saveData() {
    const score = {
      playerX: await getUserId(playerX),
      playerXScore: pXScore,
      playerZ: await getUserId(playerZ),
      playerZScore: pZScore,
    }

    fetch(`${env.scoreApi}score`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(score)
    });

    setPXScore(0);
    setPZScore(0);
  }

  return (
    <Flex minH="100vh" width="100%"
      alignItems="center"
      justifyContent="center">
      <Card height="100%" width="40%">
        <CardBody>

          <Flex width="100%" justifyContent="center">
            <Text fontSize="2xl">Ping Pong</Text>
          </Flex>

          <Flex width="100%" justifyContent="space-between" mt="1rem">
            <Flex direction="column">
              <Text>Player X</Text>
              <Flex alignItems="center" mt="0.5rem">
                <Input type="text" onChange={(event) => setPlayerX(event.target.value)}/>
              </Flex>

              <Flex mt="1rem" alignItems="center" justifyContent="center">
                <Button mx="0.2rem" 
                  onClick={() => setPXScore(pXScore - 1)}>-</Button>
                {pXScore}
                <Button mx="0.2rem"
                  onClick={() => setPXScore(pXScore + 1)}>+</Button>
              </Flex>
            </Flex>

            <Flex direction="column" >
              <Text>Player Z</Text>
              <Flex alignItems="center" mt="0.5rem">
                <Input type="text" onChange={(event) => setPlayerZ(event.target.value)} />
              </Flex>

              <Flex mt="1rem" alignItems="center" justifyContent="center">
                <Button mx="0.2rem"
                  onClick={() => setPZScore( pZScore - 1)}>-
                </Button>
                {pZScore}
                <Button mx="0.2rem"
                  onClick={() => setPZScore(pZScore + 1)}>+
                </Button>
              </Flex>
            </Flex>
          </Flex>

          <Flex mt="1rem" width="100%" justifyContent="center">
              <Button onClick={saveData}>
                Save
              </Button>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default App;
