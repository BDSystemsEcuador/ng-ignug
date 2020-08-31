import { Location } from './location';
import { State } from '../ignug/state';
import { Company } from './company';

export class CompanyProfessional {
    id: number;
    company_id: Company;
    code: string;
    contact: string;
    email: string;
    phone: string;
    cell_phone: string;
    contract_type: string;
    position: string;
    training_hours: string;
    experience_time: string;
    remuneration: string;
    working_day: string;
    number_jobs: string;
    start_date: Date;
    finish_date: Date;
    activities: string;
    aditional_information: string;
    location_id: Location;
    state_id: State
}

