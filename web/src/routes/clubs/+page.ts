import type { Club } from '@bde-cesi-nancy/types';
import type { Load } from '@sveltejs/kit';


/** @type {import('./$types').PageLoad} */
export const load: Load = async ({ fetch }) => {
    return {
        clubs: [] as Club[]
    };
};
