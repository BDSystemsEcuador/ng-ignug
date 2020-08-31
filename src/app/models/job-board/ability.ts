import { Professional } from './professional';
import { State } from './../ignug/state';
import { Category } from './category';

export class Ability {
    id: number;
    professional_id: Professional;
    category_id: Category;
    description: string;
    state_id: State
}

