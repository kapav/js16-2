import AppService from './modules/app.service';
import {config} from './modules/config';
import './modules/header.component';
import './css/index.css';

console.log('Здравствуй, Вселенная!');

console.log(css.toString());

console.log('Config key:', config.key);

const service = new AppService('Здравствуй, Вселенная!');
service.log();
