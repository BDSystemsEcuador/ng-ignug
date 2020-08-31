import { Catalogue } from './catalogue';
import { Professional } from './professional';
import { State } from '../ignug/state';

export class ProfessionalExperience {
    id: number;
    professional_id: Professional;
    employer: string;
    position_id: Catalogue;
    job_description: string;
    start_date: string;
    finish_date: string;
    reason_leave: string;
    current_work: string;
    state_id: State
}

