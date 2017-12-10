import 'normalize.css';
import './index.scss';

import  createMenu from '../../components/menu/menu';
let menu = createMenu(['Main', 'about me', 'Blog'], 'menu');
document.body.appendChild(menu);

console.log('in index.js');
