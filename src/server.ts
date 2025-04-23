import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
});

const drivers = [
    { id: 1, name: 'Max Verstappen', team: 'Red Bull Racing' },
    { id: 2, name: 'Lewis Hamilton', team: 'Mercedes' },
    { id: 3, name: 'Charles Leclerc', team: 'Ferrari' },
    { id: 4, name: 'Fernando Alonso', team: 'Aston Martin' },
    { id: 5, name: 'Lando Norris', team: 'McLaren' }
];

const teams = [
    { "id": 1, "name": "Red Bull Racing", "country": "Austria" },
    { "id": 2, "name": "Mercedes", "country": "Germany" },
    { "id": 3, "name": "Ferrari", "country": "Italy" },
    { "id": 4, "name": "Aston Martin", "country": "United Kingdom" },
    { "id": 5, "name": "McLaren", "country": "United Kingdom" }
];

interface TeamsParams {
    id: string
};

interface DriverParams {
    id: string
};

server.get('/teams', async (_, response) => {
    response.type('application/json').code(200);
    return teams;
});

server.get<{Params: TeamsParams}>('/teams/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const team = teams.find(d => d.id === id);

    if (!team) {
        response.type('application/json').code(404);
        return { message: 'Team not found' }
    }

    response.type('application/json').code(200);
    return team;
});

server.get('/drivers', async (_, response) => {
    response.type('application/json').code(200);

    return drivers;
});

server.get<{Params: DriverParams}>('/drivers/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find(d => d.id === id);

    if (!driver) {
        response.type('application/json').code(404);
        return { message: 'Driver not found' }
    }

    response.type('application/json').code(200);
    return driver;
});

server.listen({port: Number(process.env.PORT)}, () => {
    console.log('Server init');
});