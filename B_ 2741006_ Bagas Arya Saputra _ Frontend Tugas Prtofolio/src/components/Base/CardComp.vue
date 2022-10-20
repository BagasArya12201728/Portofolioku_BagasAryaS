<script>
export default {
    name: 'CardComp',
    props: {
        data: Object,
    },
};
</script>


<template>
    <figure class="grid-item">
        <div class="img-container">

        <img class="grid-img" :src="data.img"  alt=""/>
        </div>
        <figcaption>
            <p>{{ data.title }}</p>
        </figcaption>
    </figure>
</template>

<style lang="scss">
 .grid-item {
    width: 100%;
    overflow: hidden;
    border: 1px solid gray;
    border-radius: 1rem;

    .img-container {
    height: 100px;
    object-fit: cover;
    }

    figcaption {
      background-color: white;
      padding: 1rem 0.25rem;
      text-align: center;
    }
  }
  .grid-img {
    width: 100%;
  }
  
  </style>