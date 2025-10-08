import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "c2fvhdju",
    dataset: 'production',
    apiVersion: '2025-02-06',
    useCdn: false
});