import { Catalogue } from './catalogue';
import { Professional } from './professional';
import { State } from '../ignug/state';

export class AcademicFormation {
    id: number;
    professional_id: Professional;
    institution_id: Catalogue;
    career_id: Catalogue;
    professional_degree_id: Catalogue;
    registration_date: Date;
    senescyt_code: string;
    has_titling: boolean;
    state_id: State
}

