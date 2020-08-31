import { Catalogue } from './catalogue';
import { Professional } from './professional';
import { State } from '../ignug/state';

export class Language {
    id: number;
    professional_id: Professional;
    written_level_id: Catalogue;
    spoken_level_id: Catalogue;
    reading_level_id: Catalogue;
    state_id: State
}

