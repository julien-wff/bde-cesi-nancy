<script lang="ts">
    export let label: string;
    export let href: string;
    export let current: boolean = false;
    export let icon: string;
</script>


<style>
    a, a:link, a:visited {
        color: var(--black);
        text-decoration: none;
        padding: 1rem;
        display: inline-block;
    }

    div {
        position: relative;
        height: 24px;
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    img {
        height: 24px;
        width: 24px;
    }

    div::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 0;
        height: 3px;
        border-radius: 3px;
        background-color: var(--black);
        transition: width 0.2s ease-in-out;
    }

    a.current div::after, a:hover div::after {
        width: 100%;
    }

    @media all and (max-width: 850px) {
        a, a:link, a:visited {
            padding: 0;
            flex: 1;
        }

        div {
            flex-direction: column;
            height: auto;
        }

        div::after {
            display: none;
        }
    }

    @media all and (max-width: 500px) {
        span {
            font-size: 0.875rem; /* 14px */
            line-height: normal;
        }
    }

    @media all and (max-width: 400px) {
        span {
            font-size: 0.75rem; /* 12px */
        }
    }

    @media all and (max-width: 300px) {
        span {
            font-size: 0.625rem; /* 10px */
        }
    }
</style>


<a class="bold" class:current {href}>
    <div>
        <img alt={icon} src="/icons/{icon}.svg">
        <span>{label}</span>
    </div>
</a>
