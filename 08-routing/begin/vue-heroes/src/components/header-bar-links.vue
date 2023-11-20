<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-brand">
        <div>
          <button class="button1">
            <a :href="weddingsite" target="_blank" rel="noopener noreferrer">
              <img src="coupleicon.png" alt="Couple" class="my-icon" height="50" width="50"/>  
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weddingsite: 'https://jw.org',
    };
  },
};
</script>
