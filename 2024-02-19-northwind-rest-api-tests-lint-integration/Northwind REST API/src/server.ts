import path from 'path'
process.env['NODE_CONFIG_DIR'] = path.resolve(__dirname, 'config');
import config from 'config';
import server from './app';

server.listen(config.get<number>('app.port'), () => {
    console.log(`${config.get<string>('app.name')} is running on localhost:${config.get<number>('app.port')}`)
})