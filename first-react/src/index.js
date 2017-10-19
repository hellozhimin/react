import React from 'react';
import { render } from 'react-dom';

// 引入Helloworld组件
import Helloworld from './helloworld'

const root = document.querySelector('#root')

render(<Helloworld name1="Tom" name2="Jack" city="beijing"/>,root)

