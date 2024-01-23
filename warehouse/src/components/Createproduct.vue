<!-- CreateButton.vue -->
<template>
  <button class="create" @click="handleCreate">Create</button>
</template>

<script>
export default {
  methods: {
    handleCreate() {
      // Handle the click event for the "Create" button
      // You can emit an event or perform any other action here
      console.log("Create button clicked");
    },
  },
};
</script>

<style >
.create{
        border-radius: 3px;
        border: none;
        background: #4E8844;
        padding: 5px 10px 5px 10px;
        color: #FFF;
        margin-right: 30px;
    }
</style>
