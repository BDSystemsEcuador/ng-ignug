import { State } from './../ignug/state';
import { User } from '../authentication/user';
import { Catalogue } from './catalogue';

export class Company {
    id: number;
    user_id: User;
    type_id: Catalogue;
    trade_name: string;
    comercial_activity: string;
    state_id: State
}
