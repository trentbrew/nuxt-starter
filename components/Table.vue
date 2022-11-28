<script setup>
  const props = defineProps({
    data: {
      type: [Object, Array],
      default: [],
    },
  })
  const keys = computed(() => {
    return props.data.reduce((acc, item) => {
      return Object.keys(item).reduce((acc, key) => {
        if (!acc.includes(key)) acc.push(key)
        return acc
      }, acc)
    }, [])
  })
</script>

<template>
  <div class="overflow-x-auto z-0">
    <table class="table w-full">
      <thead>
        <tr>
          <th>#</th>
          <th v-for="(key, keyIndex) in keys" :key="keyIndex">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, itemIndex) in props.data" :key="itemIndex" class="hover cursor-pointer">
          <th>{{ itemIndex }}</th>
          <td v-for="(datum, datumIndex) in Object.entries(item)" :key="datumIndex">{{ datum[1] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
