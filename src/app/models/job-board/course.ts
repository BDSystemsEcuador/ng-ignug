import { Catalogue } from './catalogue';
import { Professional } from './professional';
import { State } from '../ignug/state';

export class Course {
    id: number;
    professional_id: Professional;
    event_type_id: Catalogue;
    institution_id: Catalogue;
    event_name: string;
    start_date: Date;
    finish_date: Date;
    hours: string;
    type_certification_id: Catalogue;
    state_id: State
}

