import {createStore} from 'redux';
import { people } from './reducer';

const initialStore = {
    people: []
};

export const store = createStore(people, initialStore);