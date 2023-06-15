import {rdj} from './ironman';

export default class Teacher extends rdj {
    constructor(name,degree){
    super(name);
    this.degree = degree;
    }
    teach(){
        console.log('teach')
    }
}

export function salary() {};