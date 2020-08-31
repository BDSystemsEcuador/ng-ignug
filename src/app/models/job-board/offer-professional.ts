import { Offer } from './offer';
import { Catalogue } from './catalogue';
import { Professional } from './professional';

export class OfferProfessional {
    id: number;
    professional_id: Professional;
    offer_id: Offer;
    type_id: Catalogue;
}


