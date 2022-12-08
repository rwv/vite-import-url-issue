<script setup lang="ts">
import { ref, onMounted } from "vue";

import TestJSURL from "@/test.js?url";
import WorkerJSURL from "@/test.worker.js?url";

const workerContent = ref("");
const workerResult = ref("");

onMounted(async () => {
  const response = await fetch(WorkerJSURL);
  workerContent.value = await response.text();
});

const worker = new Worker(WorkerJSURL);
worker.onmessage = (event) => {
  workerResult.value = event.data;
};
worker.postMessage(TestJSURL)

</script>

<template>
  <table>
    <tr>
      <td>WorkerJSURL</td>
      <td>{{ WorkerJSURL }}</td>
    </tr>
    <tr>
      <td>workerContent</td>
      <td><code><pre>{{ workerContent }}</pre></code></td>
    </tr>
    <tr>
      <td>workerResult</td>
      <td>{{ workerResult }}</td>
    </tr>
  </table>
</template>
