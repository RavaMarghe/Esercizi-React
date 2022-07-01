import * as ReactDOM from 'react-dom/client';
import { Root } from './Root';
import './index.css'

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container)
root.render(<Root />)

