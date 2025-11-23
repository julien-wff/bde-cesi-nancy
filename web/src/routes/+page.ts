import type { OrganizationChart, Recruitment } from '@bde-cesi-nancy/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    return {
        recruitment: [] as Recruitment[],
        organizationChart: [] as OrganizationChart[],
    };
};
