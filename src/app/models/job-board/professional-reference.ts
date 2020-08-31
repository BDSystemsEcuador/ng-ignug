import { Professional } from './professional';
import { State } from './../ignug/state';

export class ProfessionalReference {
    id: number;
    professional_id: Professional;
    institution: string;
    position: string;
    contact: string;
    phone: string;
    state_id: State
}

