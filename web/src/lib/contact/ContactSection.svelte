<script lang="ts">
    import { page } from "$app/stores";

    const email = "contact@bdecesinancy.fr";
    const subject = $page.url.searchParams.get('subject');

    const mailto = subject
        ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
        : `mailto:${email}`;
</script>

<style>
    .contact-subtitle {
        font-size: 1rem;
        margin-bottom: 1rem;
    }

    .contact-links {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    @media (max-width: 850px) {
        .contact-links {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
    }

    .contact-link {
        display: flex;
        align-items: center;
        gap: 1rem;
        text-decoration: none;
        background-color: var(--light-gray);
        color: inherit;
        border-radius: 1rem;
        padding: 1.5rem;
        transition: scale 0.3s;
    }

    @media (max-width: 500px) {
        .contact-link {
            padding: 1rem;
        }
    }

    .contact-link:hover {
        scale: 1.02;
    }

    .contact-link img {
        height: 3rem;
        width: 3rem;
    }

    .contact-details {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .contact-details span:first-child {
        font-weight: bold;
    }
</style>


<div class="contact-subtitle">
    Pour nous contacter, ça se passe sur Insta ou par mail&nbsp;!
</div>

<div class="contact-links">
    <a class="contact-link" href="https://www.instagram.com/bde_cesi_nancy">
        <img src="/icons/instagram-color.svg" alt="Email Icon" width="24" height="24" />
        <div class="contact-details">
            <span>Instagram</span>
            <span>@bde_cesi-nancy</span>
        </div>
    </a>

    <a class="contact-link" href={mailto}>
        <img src="/icons/mail-filled-primary.svg" alt="Email Icon" width="24" height="24" />
        <div class="contact-details">
            <span>Email</span>
            <span>{email}</span>
        </div>
    </a>
</div>
