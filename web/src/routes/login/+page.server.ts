import type { ServerLoad } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const load: ServerLoad = ({ cookies, url }) => {
    if (url.searchParams.has('reason'))
        return { error: url.searchParams.get('reason') };

    const refreshToken = cookies.get('directus_refresh_token');

    if (!refreshToken)
        throw redirect(302, '/members');

    cookies.delete('directus_refresh_token');

    return { refreshToken };
};
