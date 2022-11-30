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

  const data = computed(() => props.data.map((item) => keys.value.map((key) => item[key])))
</script>

<template>
  <div class="overflow-x-auto z-0">
    <table class="table w-full">
      <thead>
        <tr>
          <th class="text-[#ffffff24]">#</th>
          <th v-for="(key, keyIndex) in keys" :key="keyIndex">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, itemIndex) in data" :key="itemIndex" class="hover cursor-pointer">
          <th class="font-normal text-[#ffffff24]">{{ itemIndex }}</th>
          <td v-for="(datum, datumIndex) in Object.entries(item)" :key="datumIndex">
            {{ datum[1] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
