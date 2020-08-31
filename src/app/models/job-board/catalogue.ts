import { User } from '../authentication/user';
import { State } from '../ignug/state';

export class Catalogue {
    id: number;
    parent_code_id: Catalogue;
    code: string;
    name: string;
    type: string;
    icon: string;
    state_id: State
}

