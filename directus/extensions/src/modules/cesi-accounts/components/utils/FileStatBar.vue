<template>
    <div class="bar">
        Fichier: {{ filename }} ({{ formatFilesize(filesize) }})
        <div class="icons">
            <v-button :disabled="loading" icon rounded secondary @click="$emit('clear')">
                <v-icon name="close"/>
            </v-button>
            <v-button :disabled="loading" :loading="deleting" danger icon rounded @click="handleFileDelete">
                <v-icon name="delete"/>
            </v-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useApi } from '@directus/extensions-sdk';
import { ref } from 'vue';
import { formatFilesize } from '../../../../utils/formatFilesize';

const api = useApi();
const deleting = ref(false);

const props = defineProps<{
    filename: string,
    filesize: number,
    fileid: string,
    loading: boolean,
}>();

const emit = defineEmits<{
    (eventName: 'clear'): void,
}>();

async function handleFileDelete() {
    deleting.value = true;
    await api.delete(`/files/${props.fileid}`);
    emit('clear');
}
</script>

<style scoped>
.bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
}

.icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}
</style>
