<script context="module" lang="ts">
    import { writable } from 'svelte/store';

    let isSubmitted = writable(false);
</script>


<script lang="ts">
    import ContactForm from '$lib/contact/ContactForm.svelte';
    import ContactSuccessMessage from '$lib/contact/ContactSuccessMessage.svelte';
    import SectionContainer from '$lib/layout/SectionContainer.svelte';
    import Meta from '$lib/Meta.svelte';
    import type { IContactFormData } from '@bde-cesi-nancy/types/api';

    let isLoading = false;
    let error: string | null = 'Formulaire non disponible';

    function handleFormSubmit({ detail: form }: { detail: IContactFormData }) {
    }
</script>


<Meta title="Contact"/>


<SectionContainer header>
    <h2 class="header-2">Contact 💬</h2>
    {#if !$isSubmitted}
        <ContactForm on:submit={handleFormSubmit} disabled={isLoading} {error}/>
    {:else}
        <ContactSuccessMessage/>
    {/if}
</SectionContainer>
