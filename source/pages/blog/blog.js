import 'normalize.css';
import './blog.scss';

import  createMenu from '../../components/menu/menu';
let menu = createMenu(['Main', 'about me', 'Blog'], 'menu');
document.body.appendChild(menu);

console.log('in blog.js');